import { useState, useEffect } from "react";
import {
  SProductsCategories,
  SProductsCategoriesChoose,
  SProductsCategoriesChooseItem,
  SProductsPrices,
  SProductsPricesAndCategories,
  SProductsPricesAndCategoriesTitle,
  SProductsPricesRange,
} from "./SProductsPricesAndCategories.styled";

export function ProductsPricesAndCategories() {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

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
        {/* To Do - categories filter */}
        <SProductsCategoriesChoose>
          {categories?.map((category) => (
            <SProductsCategoriesChooseItem key={category}>
              <input type="checkbox" />
              <label>{category}</label>
            </SProductsCategoriesChooseItem>
          ))}
        </SProductsCategoriesChoose>
      </SProductsCategories>
    </SProductsPricesAndCategories>
  );
}
