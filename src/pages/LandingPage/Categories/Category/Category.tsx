import { Link } from "react-router-dom";
import {
  SCategory,
  SCategoryImgWrapper,
  SCategoryName,
} from "./SCategory.styled";
import { ImgByCategory } from "./ImgByCategory";
import { useDispatch } from "react-redux";
import { makeActiveCategory } from "../../../../state/categories/categoriesSlice";

type CategoryProps = {
  name: string;
};

export function Category({ name }: CategoryProps) {
  const dispatch = useDispatch();

  return (
    <Link to="/products">
      <SCategory onClick={() => dispatch(makeActiveCategory(name))}>
        <SCategoryImgWrapper>
          <ImgByCategory name={name} />
        </SCategoryImgWrapper>
        <SCategoryName>{name}</SCategoryName>
      </SCategory>
    </Link>
  );
}
