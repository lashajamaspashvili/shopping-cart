import { Link } from "react-router-dom";
import {
  SHighlight,
  SHighlightInfo,
  SHighlightInfoText,
  SHighlightInfoTitle,
  SHighlightText,
} from "./SHighlight.styled";

type HighlightProps = {
  title: string;
  img: string;
  size: "short" | "long";
};

export function Highlight({ img, title, size }: HighlightProps) {
  return (
    <Link to="/products">
      <SHighlight img={img} size={size}>
        <SHighlightText>{title}</SHighlightText>
        <SHighlightInfo>
          <SHighlightInfoTitle>{title}</SHighlightInfoTitle>
          <SHighlightInfoText>PRICE 20%</SHighlightInfoText>
          <SHighlightInfoText>OFF</SHighlightInfoText>
          <SHighlightInfoText>DISCOUNT CODE -</SHighlightInfoText>
          <SHighlightInfoText>VATR3920</SHighlightInfoText>
        </SHighlightInfo>
      </SHighlight>
    </Link>
  );
}
