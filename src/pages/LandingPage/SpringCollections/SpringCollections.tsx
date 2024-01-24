import { Link } from "react-router-dom";
import {
  SSpringCollections,
  SSpringCollectionsBlueText,
  SSpringCollectionsButton,
  SSpringCollectionsInfo,
  SSpringCollectionsRedText,
  SSpringCollectionsText,
} from "./SSpringCollections.styled";
import Vector from "../../../assets/vector.svg";

export function SpringCollections() {
  return (
    <SSpringCollections>
      <SSpringCollectionsInfo>
        <SSpringCollectionsText>
          <SSpringCollectionsBlueText>SPRING</SSpringCollectionsBlueText>{" "}
          <SSpringCollectionsRedText>COLLECTIONS</SSpringCollectionsRedText>
        </SSpringCollectionsText>
        <Link to="/products">
          <SSpringCollectionsButton>
            <span>SHOP NOW</span>
            <img src={Vector} />
          </SSpringCollectionsButton>
        </Link>
        <div>To Do - TIMER</div>
      </SSpringCollectionsInfo>
    </SSpringCollections>
  );
}
