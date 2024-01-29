import styled from "styled-components";
import tw from "twin.macro";

export const SProductsPricesAndCategories = styled.div`
  ${tw`h-[1140px] p-4 bg-[#f9fafb] flex flex-col gap-10 w-[255px]`}
`;

export const SProductsPrices = styled.div`
  ${tw`flex flex-col gap-4`}
`;

export const SProductsPricesAndCategoriesTitle = styled.div`
  ${tw`text-[#1F2937] text-[12px]`}
  font-style: normal;
  font-weight: 400;
`;

export const SProductsPricesRange = styled.div`
  ${tw`flex justify-between items-center`}

  span {
    ${tw`text-[#4B5563] text-[10px]`}
    font-style: normal;
    font-weight: 400;
  }
`;

export const SProductsCategories = styled.div`
  ${tw`flex flex-col gap-6`}
`;

export const SProductsCategoriesChoose = styled.div`
  ${tw`flex flex-col gap-4`}
`;
