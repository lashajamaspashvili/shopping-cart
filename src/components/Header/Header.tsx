import { Link } from "react-router-dom";
import {
  SHeader,
  SHeaderIcons,
  SHeaderNavbar,
  SIconContainer,
} from "./SHeader.styled";
import Logo from "../../assets/closet.png";
import Profile from "../../assets/profile.svg";
import Cart from "../../assets/cart.svg";
import Heart from "../../assets/heart.svg";

type HeaderProps = {
  isLandingPage?: boolean;
};

export function Header({ isLandingPage }: HeaderProps) {
  return (
    <SHeader>
      <Link to="/">
        <div>
          <img src={Logo} alt="Closet Logo" />
        </div>
      </Link>
      {isLandingPage ? (
        <SHeaderNavbar>
          <a href="#">Discovery</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </SHeaderNavbar>
      ) : null}
      <SHeaderIcons>
        <Link to="/">
          <SIconContainer>
            <img src={Profile} />
          </SIconContainer>
        </Link>
        <Link to="cart">
          <SIconContainer>
            <img src={Cart} />
          </SIconContainer>
        </Link>
        {!isLandingPage ? (
          <Link to="/favourites">
            <SIconContainer>
              <img src={Heart} />
            </SIconContainer>
          </Link>
        ) : null}
      </SHeaderIcons>
    </SHeader>
  );
}
