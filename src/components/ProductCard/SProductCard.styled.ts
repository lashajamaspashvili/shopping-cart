import styled from "styled-components";
import tw from "twin.macro";

export const SProductCard = styled.div`
  ${tw`w-[224px] h-[370px] flex flex-col gap-3 pb-3 px-3 border border-solid border-[#E5E7EB]`}
`;

export const SProductCardImage = styled.div`
  ${tw`w-full h-[258px] relative`}

  img {
    ${tw`w-full h-full`}
  }
`;

export const SProductCardFavouriteButton = styled.div`
  ${tw`w-9 h-9 absolute right-3 top-3 flex items-center justify-center`}

  background: rgba(0, 0, 0, 0.30);

  img {
    ${tw`w-1/2 h-1/2`}
  }
`;

export const SProductCardDescription = styled.div`
  ${tw`text-[#1F2937] text-[10px]`}

  font-style: normal;
  font-weight: 400;
`;

export const SProductCardPriceWrapper = styled.div`
  ${tw`flex items-center justify-between mt-auto`}
`;

export const SProductCardPrice = styled.span`
  ${tw`text-[#374151] text-[14px]`}

  font-style: normal;
  font-weight: 400;
`;

export const SProductCardCount = styled.span`
  ${tw`text-[#4B5563] text-[12px]`}

  font-style: normal;
  font-weight: 400;
`;

export const SProductCardCategory = styled.div`
  ${tw`bg-[#111827] text-[#fff] text-[9px] py-0.5 px-2 ml-auto`}

  font-style: normal;
  font-weight: 400;
`;
