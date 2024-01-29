import { ChangeEvent, useState } from "react";
import { SProductsCategoriesChooseItem } from "./SCategoryFilter.styled";
import {
  makeActiveCategory,
  removeActiveCategory,
} from "../../../state/categories/categoriesSlice";
import { useDispatch } from "react-redux";

export function CategoryFilter({
  category,
}: {
  category: {
    category: string;
    active: boolean;
  };
}) {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  function checkboxHandler(e: ChangeEvent<HTMLInputElement>, category: string) {
    if (e.target.checked) {
      dispatch(makeActiveCategory(category));
      setChecked(true);
    } else {
      dispatch(removeActiveCategory(category));
      setChecked(false);
    }
  }

  return (
    <SProductsCategoriesChooseItem>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => checkboxHandler(e, category?.category)}
      />
      <label>{category?.category}</label>
    </SProductsCategoriesChooseItem>
  );
}
