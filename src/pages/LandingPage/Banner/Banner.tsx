import { Link } from "react-router-dom";
import {
  SBanner,
  SBannerButton,
  SBannerInfo,
  SBannerText,
} from "./SBanner.styled";
import ClosetIcon from "../../../assets/closet-icon.png";

export function Banner() {
  return (
    <SBanner>
      <SBannerInfo>
        <img src={ClosetIcon} alt="Closet Icon" />
        <SBannerText>Start The Day With Closet.</SBannerText>
        <Link to="/products">
          <SBannerButton>Discovery Our Collection</SBannerButton>
        </Link>
      </SBannerInfo>
    </SBanner>
  );
}
