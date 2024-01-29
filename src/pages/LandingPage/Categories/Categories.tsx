import { useEffect, useState } from "react";
import {
  SArrowContainer,
  SCategories,
  SCategoriesContainer,
  SCategoriesTitle,
  SCategoryCardsWrapper,
} from "./SCategories.styled";
import Left from "../../../assets/left.svg";
import Right from "../../../assets/right.svg";
import { Category } from "./Category";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../state/store";
import { fetchCategories } from "../../../state/categories/categoriesSlice";

export function Categories() {
  const categories = useSelector(
    (state: RootState) => state?.categories?.value
  );

  const [categoriesFrom, setCategoriesFrom] = useState<number>(0);

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
    <SCategories>
      <SCategoriesTitle>Categories</SCategoriesTitle>
      <SCategoriesContainer>
        <SArrowContainer
          onClick={() =>
            setCategoriesFrom((prev) => (prev === 0 ? 0 : prev - 1))
          }
        >
          <img src={Left} alt="Left arrow" />
        </SArrowContainer>
        <SCategoryCardsWrapper>
          {categories
            ?.slice(categoriesFrom, categoriesFrom + 4)
            ?.map((category) => (
              <Category key={category?.category} name={category?.category} />
            ))}
        </SCategoryCardsWrapper>
        <SArrowContainer
          onClick={() =>
            setCategoriesFrom((prev) => (prev === 2 ? 2 : prev + 1))
          }
        >
          <img src={Right} alt="Right arrow" />
        </SArrowContainer>
      </SCategoriesContainer>
    </SCategories>
  );
}
