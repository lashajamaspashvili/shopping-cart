import { useEffect, Dispatch, SetStateAction } from "react";
import Slider from "react-slider";
import { useDispatch, useSelector } from "react-redux";
import {
  SProductsCategories,
  SProductsCategoriesChoose,
  SProductsPrices,
  SProductsPricesAndCategories,
  SProductsPricesAndCategoriesTitle,
  SProductsPricesRange,
  SSliderWrapper,
} from "./SProductsPricesAndCategories.styled";
import { RootState } from "../../state/store";
import { fetchCategories } from "../../state/categories/categoriesSlice";
import { CategoryFilter } from "./CategoryFilter";

export function ProductsPricesAndCategories({
  values,
  setValues,
}: {
  values: number[];
  setValues: Dispatch<SetStateAction<number[]>>;
}) {
  const categories = useSelector(
    (state: RootState) => state?.categories?.value
  );

  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories?.length) {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          dispatch(
            fetchCategories(
              data?.map((category: string) => ({ category, active: false }))
            )
          );
        });
    }
  }, [categories]);

  return (
    <SProductsPricesAndCategories>
      <SProductsPrices>
        <SProductsPricesAndCategoriesTitle>
          PRICES
        </SProductsPricesAndCategoriesTitle>
        <SProductsPricesRange>
          <span>Range</span>
          <span>{`$ ${values?.[0]}  -  $ ${values?.[1]}`}</span>
        </SProductsPricesRange>
        <SSliderWrapper>
          <Slider value={values} onChange={setValues} min={0} max={1000} />
        </SSliderWrapper>
      </SProductsPrices>
      <SProductsCategories>
        <SProductsPricesAndCategoriesTitle>
          CATEGORIES
        </SProductsPricesAndCategoriesTitle>
        <SProductsCategoriesChoose>
          {categories?.map((category) => (
            <CategoryFilter key={category?.category} category={category} />
          ))}
        </SProductsCategoriesChoose>
      </SProductsCategories>
    </SProductsPricesAndCategories>
  );
}
