import styled from "styled-components";
import tw from "twin.macro";

export const SHeader = styled.div`
  ${tw`w-full h-16 flex items-center justify-between px-[150px] bg-[#fff]`}
`;

export const SHeaderNavbar = styled.div`
  ${tw`flex items-center gap-6`}

  a {
    ${tw`text-[#272727]`}
    text-decoration: none;
  }
`;

export const SHeaderIcons = styled.div`
  ${tw`flex items-center gap-2`}
`;

export const SIconContainer = styled.div`
  ${tw`w-[34px] h-[34px] flex items-center justify-center text-[#3E5674]`}
`;
