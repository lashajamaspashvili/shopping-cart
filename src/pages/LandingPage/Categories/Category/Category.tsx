import { Link } from "react-router-dom";
import {
  SCategory,
  SCategoryImgWrapper,
  SCategoryName,
} from "./SCategory.styled";
import { ImgByCategory } from "./ImgByCategory";

type CategoryProps = {
  name: string;
};

export function Category({ name }: CategoryProps) {
  return (
    <Link to="/products">
      <SCategory>
        <SCategoryImgWrapper>
          <ImgByCategory name={name} />
        </SCategoryImgWrapper>
        <SCategoryName>{name}</SCategoryName>
      </SCategory>
    </Link>
  );
}
