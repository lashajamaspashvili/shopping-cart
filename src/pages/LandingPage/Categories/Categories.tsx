import { useState, useEffect } from "react";
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

export function Categories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

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
