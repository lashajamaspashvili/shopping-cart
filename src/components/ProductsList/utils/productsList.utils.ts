import { ProductsType } from "../../../types/types";

export function filterProducts(
  products: ProductsType[],
  categories: {
    category: string;
    active: boolean;
  }[],
  pathname: string,
  pricesRange: number[]
): ProductsType[] {
  const filteredProducts = pathname?.includes("favourites")
    ? products?.filter((product) => product?.favourite)
    : products;

  if (categories?.filter((category) => category?.active)?.length) {
    return filteredProducts?.filter(
      (product) =>
        categories?.find((category) => category?.category === product?.category)
          ?.active &&
        product?.price >= pricesRange?.[0] &&
        product?.price <= pricesRange?.[1]
    );
  }
  return filteredProducts?.filter(
    (product) =>
      product?.price >= pricesRange?.[0] && product?.price <= pricesRange?.[1]
  );
}

export function pagesArr(products: ProductsType[]) {
  const result = [];

  for (let i = 1; i <= products?.length / 9 + 1; i++) {
    result?.push(i);
  }

  return result;
}
