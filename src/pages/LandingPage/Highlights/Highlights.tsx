import {
  SDivider,
  SHighlightCards,
  SHighlights,
  SHighlightsTitle,
} from "./SHighlights.styled";
import Shoes from "../../../assets/shoes.png";
import Collections from "../../../assets/collections.png";
import Arrivals from "../../../assets/arrivals.png";
import Items from "../../../assets/items.png";
import { Highlight } from "./Highlight";

export function Highlights() {
  return (
    <SHighlights>
      <SHighlightsTitle>THIS WEEKS HIGHLIGHTS</SHighlightsTitle>
      <SDivider />
      <SHighlightCards>
        <Highlight img={Shoes} size="short" title="Exclusive Shoes" />
        <Highlight
          img={Collections}
          size="long"
          title="Exquisite Styles & Collections"
        />
        <Highlight img={Arrivals} size="long" title="New Arrivals" />
        <Highlight img={Items} size="short" title="Exclusive Items" />
      </SHighlightCards>
    </SHighlights>
  );
}
