import { ProductsType } from "../../../types/types";

export function filterProducts(
  products: ProductsType[],
  categories: {
    category: string;
    active: boolean;
  }[]
): ProductsType[] {
  if (categories?.filter((category) => category?.active)?.length) {
    return products?.filter(
      (product) =>
        categories?.find((category) => category?.category === product?.category)
          ?.active
    );
  }
  return products;
}

export function pagesArr(products: ProductsType[]) {
  const result = [];

  for (let i = 1; i <= products?.length / 9 + 1; i++) {
    result?.push(i);
  }

  return result;
}
