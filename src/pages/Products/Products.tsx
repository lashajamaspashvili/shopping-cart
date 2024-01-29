import { Header } from "../../components/Header";
import { SHorizontalDivider } from "../../components/HorizontalDivider";
import { ProductsList } from "../../components/ProductsList";
import { ProductsPricesAndCategories } from "../../components/ProductsPriceAndCategories";
import { SProducts, SProductsInfo } from "./SProducts.styled";

export function Products() {
  return (
    <SProducts>
      <Header />
      <SHorizontalDivider />
      <SProductsInfo>
        <ProductsPricesAndCategories />
        <ProductsList />
      </SProductsInfo>
    </SProducts>
  );
}
