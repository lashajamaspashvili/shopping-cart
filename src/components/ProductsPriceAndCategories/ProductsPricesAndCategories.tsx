import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  SProductsCategories,
  SProductsCategoriesChoose,
  SProductsPrices,
  SProductsPricesAndCategories,
  SProductsPricesAndCategoriesTitle,
  SProductsPricesRange,
} from "./SProductsPricesAndCategories.styled";
import { RootState } from "../../state/store";
import { fetchCategories } from "../../state/categories/categoriesSlice";
import { CategoryFilter } from "./CategoryFilter";

export function ProductsPricesAndCategories() {
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
          {/* To Do - price filter functional */}
          <span>filter</span>
        </SProductsPricesRange>
        {/* To Do - price filter markup */}
        <div>markup</div>
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
