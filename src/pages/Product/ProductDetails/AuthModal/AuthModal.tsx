import ReactDom from "react-dom";
import { useState } from "react";
import {
  SBackdrop,
  SInputWrapper,
  SLabel,
  SLoginButton,
  SLogoWrapper,
  SModalOverlay,
  SText,
  STitle,
} from "./SAuthModal.styled";
import WhiteCloset from "../../../../assets/whiteCloset.png";
import { useDispatch } from "react-redux";
import { login } from "../../../../state/auth/authSlice";

type AuthModalProps = {
  onClose: () => void;
};

export function AuthModal({ onClose }: AuthModalProps) {
  const [showText, setShowText] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const portalElement = document.getElementById("overlays")!;

  function LoginHandler() {
    // Login request doesn't work
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      body: JSON.stringify({
        username,
        password,
      }),
    }).then((res) => res.json());
    setShowText(true);
    dispatch(login());
  }

  return (
    <>
      {ReactDom.createPortal(<SBackdrop onClick={onClose} />, portalElement)}
      {ReactDom.createPortal(
        <SModalOverlay>
          <SLogoWrapper>
            <img src={WhiteCloset} alt="Closet logo" />
          </SLogoWrapper>
          <STitle>Welcome to CLOSET</STitle>
          <SInputWrapper>
            <SLabel>Username</SLabel>
            <input
              type="text"
              onChange={(e) => setUsername(e?.target?.value)}
            />
          </SInputWrapper>
          <SInputWrapper>
            <SLabel>Password</SLabel>
            <input
              type="password"
              onChange={(e) => setPassword(e?.target?.value)}
            />
          </SInputWrapper>
          <SLoginButton onClick={LoginHandler}>Login</SLoginButton>
          {showText ? (
            <SText>
              Auth request doesn't work, close modal and let's continue with
              hardcoded userId
            </SText>
          ) : null}
        </SModalOverlay>,
        portalElement
      )}
    </>
  );
}
