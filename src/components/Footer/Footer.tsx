import { Link } from "react-router-dom";
import {
  SFooter,
  SFooterIcons,
  SFooterLink,
  SFooterTitle,
  SNavigation,
  SPayments,
} from "./SFooter.styled";
import Divider from "../../assets/divider.svg";
import Facebook from "../../assets/facebook.svg";
import Instagram from "../../assets/instagram.png";
import Mastercard from "../../assets/mastercard.png";
import Visa from "../../assets/visa.png";
import Amex from "../../assets/amex.png";

export function Footer() {
  return (
    <SFooter>
      <SNavigation>
        <SFooterTitle>Navigation</SFooterTitle>
        <img src={Divider} alt="Divider" />
        <Link to="/products">
          <SFooterLink>products</SFooterLink>
        </Link>
        <Link to="/products">
          <SFooterLink>categories</SFooterLink>
        </Link>
        <SFooterIcons>
          <img src={Facebook} alt="Facebook logo" />
          <img src={Instagram} alt="Instagram logo" />
        </SFooterIcons>
      </SNavigation>
      <SPayments>
        <SFooterTitle>Payments</SFooterTitle>
        <img src={Divider} alt="Divider" />
        <SFooterIcons>
          <img src={Mastercard} alt="Mastercard logo" />
          <img src={Visa} alt="Visa logo" />
          <img src={Amex} alt="Amex logo" />
        </SFooterIcons>
      </SPayments>
    </SFooter>
  );
}
