import { useState } from "react";
import { Header } from "../../components/Header";
import { SHorizontalDivider } from "../../components/HorizontalDivider";
import { ProductsList } from "../../components/ProductsList";
import { ProductsPricesAndCategories } from "../../components/ProductsPriceAndCategories";
import { SProducts, SProductsInfo } from "./SProducts.styled";

export function Products() {
  const [values, setValues] = useState([0, 1000]);

  return (
    <SProducts>
      <Header />
      <SHorizontalDivider />
      <SProductsInfo>
        <ProductsPricesAndCategories setValues={setValues} values={values} />
        <ProductsList pricesRange={values} />
      </SProductsInfo>
    </SProducts>
  );
}
