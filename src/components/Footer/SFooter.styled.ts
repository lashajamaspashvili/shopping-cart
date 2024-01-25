import styled from "styled-components";
import tw from "twin.macro";

export const SFooter = styled.div`
  ${tw`bg-[#f4f4f4] w-full h-[422px] px-[120px] py-10 flex justify-between`}
`;

export const SNavigation = styled.div`
  ${tw`flex flex-col gap-4 items-start`}

  a {
    text-decoration: none;
  }
`;

export const SPayments = styled.div`
  ${tw`flex flex-col gap-4 items-end`}
`;

export const SFooterTitle = styled.div`
  ${tw`text-[#272727] text-[22px]`}

  font-style: normal;
  font-weight: 500;
`;

export const SFooterLink = styled.div`
  ${tw`text-[#41587B] text-[18px]`}

  font-style: normal;
  font-weight: 500;
`;

export const SFooterIcons = styled.div`
  ${tw`flex items-center gap-[20px]`}
`;
