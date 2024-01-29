import { MouseEvent } from "react";
import { Link } from "react-router-dom";
import {
  SProductCard,
  SProductCardCategory,
  SProductCardCount,
  SProductCardDescription,
  SProductCardFavouriteButton,
  SProductCardImage,
  SProductCardPrice,
  SProductCardPriceWrapper,
} from "./SProductCard.styled";
import { ProductsType } from "../../types/types";
import WhiteHeart from "../../assets/whiteHeart.svg";
import RedFilledHeart from "../../assets/redFilledHeart.png";
import { useDispatch } from "react-redux";
import {
  addToFavourites,
  removeFromFavourites,
} from "../../state/products/productsSlice";

type ProductCardProps = {
  product: ProductsType;
};

export function ProductCard({ product }: ProductCardProps) {
  const dispatch = useDispatch();

  function favouriteHandler(e: MouseEvent<HTMLDivElement>) {
    e.preventDefault();
    if (product?.favourite) {
      dispatch(removeFromFavourites(product?.id));
    } else {
      dispatch(addToFavourites(product?.id));
    }
  }

  return (
    <Link to={`/products/${product?.id}`}>
      <SProductCard>
        <SProductCardImage>
          <img src={product?.image} alt={product?.title} />
          <SProductCardFavouriteButton onClick={(e) => favouriteHandler(e)}>
            {product?.favourite ? (
              <img src={RedFilledHeart} />
            ) : (
              <img src={WhiteHeart} />
            )}
          </SProductCardFavouriteButton>
        </SProductCardImage>
        <SProductCardDescription>{product?.title}</SProductCardDescription>
        <SProductCardPriceWrapper>
          <SProductCardPrice>${product?.price}</SProductCardPrice>
          <SProductCardCount>{product?.rating?.count} Orders</SProductCardCount>
        </SProductCardPriceWrapper>
        <SProductCardCategory>{product?.category}</SProductCardCategory>
      </SProductCard>
    </Link>
  );
}
