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
import { ProductsType } from "../../Products/ProductsList/ProductsList";

export function ProductDetails() {
  const [product, setProduct] = useState<ProductsType>();
  const [qty, setQty] = useState<number>(1);

  const { id } = useParams();

  function AddToCart() {
    fetch("https://fakestoreapi.com/carts", {
      method: "POST",
      body: JSON.stringify({
        userId: 5,
        date: new Date(),
        products: [{ productId: id, quantity: qty }],
      }),
    }).then((res) => res.json());
  }

  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
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
          <SproductAddToCart onClick={AddToCart}>
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
    </>
  );
}
