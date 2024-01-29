import styled from "styled-components";
import tw from "twin.macro";

export const SBackdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  z-index: 20;
  background-color: rgba(0, 0, 0, 0.75);
`;

export const SModalOverlay = styled.div`
  ${tw`flex flex-col items-center`}
  position: fixed;
  top: 20vh;
  left: 30%;
  width: 709px;
  height: 558px;
  background: rgba(62, 86, 115, 0.83);
  border-radius: 20px;
  box-shadow: 1px 1px 14px 2px rgba(255, 255, 255, 0.85);
  z-index: 30;
  animation: slide-down 300ms ease-out forwards;
`;

export const SLogoWrapper = styled.div`
  ${tw`w-[132px] h-[100px] mt-[20px]`}

  img {
    ${tw`w-full h-full`}
  }
`;

export const STitle = styled.div`
  ${tw`text-[36px] text-[#fff] mt-[20px]`}
  font-style: normal;
  font-weight: 500;
`;

export const SInputWrapper = styled.div`
  ${tw`w-[350px] flex flex-col items-start mt-9`}

  input {
    ${tw`w-full mt-2 h-[42px] text-[18px] px-2`}
  }
`;

export const SLabel = styled.label`
  ${tw`text-[16px] text-[#fff]`}
  font-style: normal;
  font-weight: 400;
`;

export const SLoginButton = styled.div`
  ${tw`mt-12 w-[140px] h-10 flex items-center justify-center text-[##445F79] bg-[#fff] rounded cursor-pointer`}
`;

export const SText = styled.div`
  ${tw`text-[#fff] mt-6`}
`;
