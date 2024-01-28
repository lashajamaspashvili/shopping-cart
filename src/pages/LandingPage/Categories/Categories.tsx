import { useEffect } from "react";
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

  const dispatch = useDispatch();

  useEffect(() => {
    if (!categories?.length) {
      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((data) => {
          dispatch(fetchCategories(data));
        });
    }
  }, [categories]);

  return (
    <SCategories>
      <SCategoriesTitle>Categories</SCategoriesTitle>
      {"To Do - Carusel"}
      <SCategoriesContainer>
        <SArrowContainer>
          <img src={Left} alt="Left arrow" />
        </SArrowContainer>
        <SCategoryCardsWrapper>
          {categories?.map((category) => (
            <Category key={category} name={category} />
          ))}
        </SCategoryCardsWrapper>
        <SArrowContainer>
          <img src={Right} alt="Right arrow" />
        </SArrowContainer>
      </SCategoriesContainer>
    </SCategories>
  );
}
