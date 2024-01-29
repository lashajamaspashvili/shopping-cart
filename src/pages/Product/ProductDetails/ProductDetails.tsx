import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import Cart from "../../../assets/cart.svg";
import {
  SArrowContainer,
  SImage,
  SImageCardsWrapper,
  SImagesContainer,
  SProductDescription,
  SProductDetails,
  SProductDetailsImage,
  SProductQuantity,
  SProductQuantityNumber,
  SProductQuantityNumberButton,
  SProductTitle,
  SproductAddToCart,
  SproductDetailsWrapper,
  SproductPrice,
} from "./SProductDetails.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { fetchCurrentProduct } from "../../../state/currentProduct/currentProductSlice";
import { AuthModal } from "./AuthModal";
import {
  addToCart,
  createCart,
  updateCart,
} from "../../../state/cart/cartSlice";

export function ProductDetails() {
  const [showAuthModal, setShowAuthModal] = useState(false);
  const [qty, setQty] = useState<number>(1);

  const auth = useSelector((state: RootState) => state?.auth?.value);
  const cart = useSelector((state: RootState) => state?.cart?.value);

  const { id } = useParams();

  const product = useSelector(
    (state: RootState) => state?.currentProduct?.value
  );

  const dispatch = useDispatch();

  function AddToCart() {
    if (cart?.length === 0) {
      dispatch(createCart({ product, qty }));
    } else if (
      cart?.findIndex((item) => item?.product?.id === product?.id) === -1
    ) {
      dispatch(addToCart({ product, qty }));
    } else {
      dispatch(updateCart({ productId: product?.id, qty }));
    }
  }

  useEffect(() => {
    setQty(cart?.find((item) => item?.product?.id === product?.id)?.qty || 1);
  }, [cart, product]);

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        dispatch(fetchCurrentProduct(data));
      });
  }, [id]);

  return (
    <>
      <SProductDetails>
        <SProductDetailsImage>
          <img src={product?.image} alt={product?.title} />
        </SProductDetailsImage>
        <SproductDetailsWrapper>
          <SProductTitle>{product?.title}</SProductTitle>
          <SproductPrice>${product?.price}</SproductPrice>
          <SProductDescription>{product?.description}</SProductDescription>
          <SProductQuantity>
            <span>Quantity</span>
            <SProductQuantityNumber>
              <SProductQuantityNumberButton
                onClick={() => setQty((prev) => prev + 1)}
              >
                +
              </SProductQuantityNumberButton>
              <span>{qty}</span>
              <SProductQuantityNumberButton
                onClick={() =>
                  setQty((prev) => {
                    if (prev === 1) {
                      return prev;
                    }
                    return prev - 1;
                  })
                }
              >
                -
              </SProductQuantityNumberButton>
            </SProductQuantityNumber>
          </SProductQuantity>
          <SproductAddToCart
            onClick={() => (auth ? AddToCart() : setShowAuthModal(true))}
          >
            <img src={Cart} alt="Cart" />
            <span>+ Add to cart</span>
          </SproductAddToCart>
        </SproductDetailsWrapper>
      </SProductDetails>
      <SImagesContainer>
        <SArrowContainer>{"<"}</SArrowContainer>
        <SImageCardsWrapper>
          <SImage>
            <img src={product?.image} alt={product?.title} />
          </SImage>
          <SImage>
            <img src={product?.image} alt={product?.title} />
          </SImage>
          <SImage>
            <img src={product?.image} alt={product?.title} />
          </SImage>
          <SImage>
            <img src={product?.image} alt={product?.title} />
          </SImage>
        </SImageCardsWrapper>
        <SArrowContainer>{">"}</SArrowContainer>
      </SImagesContainer>
      {showAuthModal ? (
        <AuthModal onClose={() => setShowAuthModal(false)} />
      ) : null}
    </>
  );
}
