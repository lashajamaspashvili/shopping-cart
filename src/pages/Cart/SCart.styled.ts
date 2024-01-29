import styled from "styled-components";
import tw from "twin.macro";

export const SCart = styled.div`
  ${tw`w-full`}
`;

export const SProductsWrapper = styled.div`
  ${tw`mt-[50px] mb-[106px] px-[120px] flex flex-col gap-[77px]`}
`;

export const SOneProduct = styled.div`
  ${tw`flex flex-col gap-[50px]`}
`;

export const STotalPrice = styled.div`
  ${tw`text-[36px] text-[#3E5673] flex items-center gap-8`}

  font-style: normal;
  font-weight: 400;
`;

export const SCheckOutButton = styled.div`
  ${tw`rounded bg-[#3E5674] py-2 px-11 ml-auto text-[#fff] cursor-pointer`}
`;

export const SCartProductCard = styled.div`
  ${tw`flex items-center gap-[46px]`}
`;

export const SImageWrapper = styled.div`
  ${tw`w-[226px] h-[202px]`}

  img {
    ${tw`w-full h-full`}
  }
`;

export const SCartProductInfo = styled.div`
  ${tw`flex flex-col gap-4 items-start`}
`;

export const SCartProductTitle = styled.div`
  ${tw`text-[22px] text-[#3E5572] w-[500px]`}

  font-style: normal;
  font-weight: 500;
`;

export const SCartProductPrice = styled.div`
  ${tw`text-[28px] text-[#3E5674] flex items-center gap-8`}

  font-style: normal;
  font-weight: 600;
`;

export const SCartProductQuantityTitle = styled.div`
  ${tw`text-[20px] text-[#3E5572]`}

  font-style: normal;
  font-weight: 400;
`;

export const SCartProductQuantity = styled.div`
  ${tw`flex flex-col gap-4 items-center`}
`;

export const SCartProductQuantityNumber = styled.div`
  ${tw`border border-solid border-[#3E5674] gap-3 px-3 py-1 flex items-center`}

  span:last-child {
    ${tw`mb-1`}
  }

  span {
    ${tw`text-[28px] text-[#41587B]`}
    font-style: normal;
    font-weight: 400;
  }
`;

export const SCartProductQuantityNumberButton = styled.span`
  ${tw`cursor-pointer`}
`;
