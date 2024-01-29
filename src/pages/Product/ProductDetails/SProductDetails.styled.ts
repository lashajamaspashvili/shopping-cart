import styled from "styled-components";
import tw from "twin.macro";

export const SProductDetails = styled.div`
  ${tw`flex gap-20 items-start justify-between`}
`;

export const SProductDetailsImage = styled.div`
  ${tw`w-[533px] h-[396px]`}

  img {
    ${tw`w-full h-full`}
  }
`;

export const SproductDetailsWrapper = styled.div`
  ${tw`flex flex-col items-start w-full`}
`;

export const SProductTitle = styled.div`
  ${tw`text-[#272727] text-[26px]`}

  font-style: normal;
  font-weight: 500;
  line-height: 57.6px;
  letter-spacing: -0.9px;
`;

export const SproductPrice = styled.div`
  ${tw`text-[#3E5673] text-[26px]`}

  font-style: normal;
  font-weight: 600;
  line-height: 57.6px;
  letter-spacing: -0.9px;
`;

export const SProductDescription = styled.div`
  ${tw`text-[#000] text-[17px]`}

  font-style: normal;
  font-weight: 500;
  line-height: 23.6px;
  letter-spacing: 1px;
`;

export const SProductQuantity = styled.div`
  ${tw`flex flex-col gap-3 items-center mt-6`}

  span {
    ${tw`text-[#272727] text-[18px]`}
    font-style: normal;
    font-weight: 400;
  }
`;

export const SProductQuantityNumber = styled.div`
  ${tw`border border-solid border-[#3E5673] gap-2 px-3 py-1 flex items-center`}

  span:last-child {
    ${tw`mb-1`}
  }
`;

export const SProductQuantityNumberButton = styled.span`
  ${tw`cursor-pointer`}
`;

export const SproductAddToCart = styled.div`
  ${tw`w-[350px] h-[42px] rounded cursor-pointer flex items-center justify-center border border-solid border-[#3E5673] mt-[52px] gap-3`}

  span {
    ${tw`text-[#3E5673]`}
  }
`;

export const SArrowContainer = styled.div`
  ${tw`w-8 h-8 rounded border border-solid border-[#415878] flex items-center justify-center cursor-pointer`}
`;

export const SImagesContainer = styled.div`
  ${tw`flex items-center gap-4 mt-12`}
`;

export const SImageCardsWrapper = styled.div`
  ${tw`flex items-center gap-6`}

  a {
    ${tw`text-[#272727]`}
    text-decoration: none;
  }
`;

export const SImage = styled.div`
  ${tw`w-[87px] h-[124px]`}

  img {
    ${tw`w-full h-full`}
  }
`;
