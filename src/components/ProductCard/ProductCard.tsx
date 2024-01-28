import { Link } from "react-router-dom";
import {
  SProductCard,
  SProductCardCategory,
  SProductCardCount,
  SProductCardDescription,
  SProductCardImage,
  SProductCardPrice,
  SProductCardPriceWrapper,
} from "./SProductCard.styled";
import { ProductsType } from "../../types/types";

type ProductCardProps = {
  product: ProductsType;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link to={`/products/${product?.id}`}>
      <SProductCard>
        {/* To Do - add to favourites functional */}
        <SProductCardImage>
          <img src={product?.image} alt={product?.title} />
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
