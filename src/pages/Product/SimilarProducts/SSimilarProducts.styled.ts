import styled from "styled-components";
import tw from "twin.macro";

export const SSimilarProducts = styled.div`
  ${tw`mt-[100px] flex flex-col gap-5`}

  ::-webkit-scrollbar {
    display: none;
  }
`;

export const SSimilarProductsTitle = styled.div`
  ${tw`text-[#41587B] text-[25px]`}

  font-style: normal;
  font-weight: 400;
`;

export const SSimilarProductsCards = styled.div`
  ${tw`flex gap-[36px] overflow-x-auto w-full`}

  a {
    text-decoration: none;
  }
`;
