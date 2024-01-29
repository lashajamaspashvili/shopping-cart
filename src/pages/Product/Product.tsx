import { Header } from "../../components/Header";
import { SProduct, SProductInfo } from "./SProduct.styled";
import { ProductDetails } from "./ProductDetails";
import { SimilarProducts } from "./SimilarProducts";
import { SHorizontalDivider } from "../../components/HorizontalDivider";

export function Product() {
  return (
    <SProduct>
      <Header />
      <SHorizontalDivider />
      <SProductInfo>
        <ProductDetails />
        <SimilarProducts />
      </SProductInfo>
    </SProduct>
  );
}
