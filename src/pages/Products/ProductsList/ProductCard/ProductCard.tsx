import { ProductsType } from "../ProductsList";
import {
  SProductCard,
  SProductCardCategory,
  SProductCardCount,
  SProductCardDescription,
  SProductCardImage,
  SProductCardPrice,
  SProductCardPriceWrapper,
} from "./SProductCard.styled";

type ProductCardProps = {
  product: ProductsType;
};

export function ProductCard({ product }: ProductCardProps) {
  return (
    <SProductCard>
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
  );
}
