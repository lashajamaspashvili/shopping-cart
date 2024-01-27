import { Header } from "../../components/Header";
import { SProduct, SProductInfo } from "./SProduct.styled";
import { ProductDetails } from "./ProductDetails";
import { SimilarProducts } from "./SimilarProducts";

export function Product() {
  return (
    <SProduct>
      <Header />
      <SProductInfo>
        <ProductDetails />
        <SimilarProducts />
      </SProductInfo>
    </SProduct>
  );
}
