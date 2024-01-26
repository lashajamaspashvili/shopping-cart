import { Header } from "../../components/Header";
import { ProductsList } from "./ProductsList";
import { ProductsPricesAndCategories } from "./ProductsPriceAndCategories";
import { SProducts, SProductsInfo } from "./SProducts.styled";

export function Products() {
  return (
    <SProducts>
      <Header />
      <SProductsInfo>
        <ProductsPricesAndCategories />
        <ProductsList />
      </SProductsInfo>
    </SProducts>
  );
}
