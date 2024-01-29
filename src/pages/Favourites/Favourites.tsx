import { useState } from "react";
import { Header } from "../../components/Header";
import { SHorizontalDivider } from "../../components/HorizontalDivider";
import { ProductsList } from "../../components/ProductsList";
import { ProductsPricesAndCategories } from "../../components/ProductsPriceAndCategories";
import { SFavourites, SFavouritesInfo } from "./SFavourites.styled";

export function Favourites() {
  const [values, setValues] = useState([0, 1000]);

  return (
    <SFavourites>
      <Header />
      <SHorizontalDivider />
      <SFavouritesInfo>
        <ProductsPricesAndCategories setValues={setValues} values={values} />
        <ProductsList pricesRange={values} />
      </SFavouritesInfo>
    </SFavourites>
  );
}
