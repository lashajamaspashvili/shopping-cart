import { Header } from "../../components/Header";
import { SHorizontalDivider } from "../../components/HorizontalDivider";
import { ProductsList } from "../../components/ProductsList";
import { ProductsPricesAndCategories } from "../../components/ProductsPriceAndCategories";
import { SFavourites, SFavouritesInfo } from "./SFavourites.styled";

export function Favourites() {
  return (
    <SFavourites>
      <Header />
      <SHorizontalDivider />
      <SFavouritesInfo>
        <ProductsPricesAndCategories />
        <ProductsList />
      </SFavouritesInfo>
    </SFavourites>
  );
}
