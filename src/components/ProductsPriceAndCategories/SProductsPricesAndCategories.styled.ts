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

export const SSliderWrapper = styled.div`
  ${tw`mt-1`}

  .slider {
    ${tw`w-full h-[3px]`}

    .thumb {
      ${tw`w-3 h-3 cursor-pointer bg-[#374151] rounded-full border-[2px] border-solid border-[#fff] top-[-4px]`}

      outline: none;
    }

    .track-0,
    .track-2 {
      ${tw`bg-[#c5c5c5] h-[3px]`}
    }
    .track-1 {
      ${tw`bg-[#374151] h-[3px]`}
    }
  }
`;
