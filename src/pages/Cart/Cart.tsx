import { useEffect } from "react";
import { Header } from "../../components/Header";
import { SHorizontalDivider } from "../../components/HorizontalDivider";
import {
  SCart,
  SCartProductCard,
  SCartProductInfo,
  SCartProductPrice,
  SCartProductQuantity,
  SCartProductQuantityNumber,
  SCartProductQuantityNumberButton,
  SCartProductQuantityTitle,
  SCartProductTitle,
  SCheckOutButton,
  SImageWrapper,
  SOneProduct,
  SProductsWrapper,
  STotalPrice,
} from "./SCart.styled";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../state/store";
import { fetchProducts } from "../../state/products/productsSlice";
import { totalPrice } from "./utils/cartUtils";
import { removeFromCart, updateCart } from "../../state/cart/cartSlice";

export function Cart() {
  const allProducts = useSelector((state: RootState) => state?.products?.value);
  const cart = useSelector((state: RootState) => state?.cart?.value);

  const dispatch = useDispatch();

  function plusHandler(productId: number, qty: number) {
    dispatch(updateCart({ productId, qty: qty + 1 }));
  }
  function minusHandler(productId: number, qty: number) {
    if (qty > 1) {
      dispatch(updateCart({ productId, qty: qty - 1 }));
    } else {
      dispatch(removeFromCart(productId));
    }
  }

  useEffect(() => {
    if (!allProducts?.length) {
      fetch(`https://fakestoreapi.com/products`)
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchProducts(data));
        });
    }
  }, [allProducts?.length]);

  return (
    <SCart>
      <Header />
      <SHorizontalDivider />
      <SProductsWrapper>
        {cart?.map((product) => (
          <SOneProduct key={product?.product?.id}>
            <SCartProductCard>
              <SImageWrapper>
                <img
                  src={product?.product?.image}
                  alt={product?.product?.title}
                />
              </SImageWrapper>
              <SCartProductInfo>
                <SCartProductTitle>{product?.product?.title}</SCartProductTitle>
                <SCartProductPrice>{`$ ${product?.product?.price?.toFixed(
                  2
                )}`}</SCartProductPrice>
              </SCartProductInfo>
              <SCartProductQuantity>
                <SCartProductQuantityTitle>Quantity</SCartProductQuantityTitle>
                <SCartProductQuantityNumber>
                  <SCartProductQuantityNumberButton
                    onClick={() =>
                      plusHandler(product?.product?.id, product?.qty)
                    }
                  >
                    +
                  </SCartProductQuantityNumberButton>
                  <span>{product?.qty}</span>
                  <SCartProductQuantityNumberButton
                    onClick={() =>
                      minusHandler(product?.product?.id, product?.qty)
                    }
                  >
                    -
                  </SCartProductQuantityNumberButton>
                </SCartProductQuantityNumber>
              </SCartProductQuantity>
            </SCartProductCard>
            <SHorizontalDivider />
          </SOneProduct>
        ))}
        <SOneProduct>
          <STotalPrice>
            <span>Total:</span>
            <span>{`$ ${totalPrice(cart)?.toFixed(2)}`}</span>
          </STotalPrice>
          <SCheckOutButton>Check-out</SCheckOutButton>
        </SOneProduct>
      </SProductsWrapper>
    </SCart>
  );
}
