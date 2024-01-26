import styled from "styled-components";
import tw from "twin.macro";

export const SProductsList = styled.div`
  ${tw`flex flex-col gap-4`}
`;

export const SProductsListSortBy = styled.div`
  ${tw`flex items-center gap-2`}

  span {
    ${tw`text-[#6B7280] text-[12px]`}

    font-style: normal;
    font-weight: 400;
  }
`;

export const SProductsListSortBySelect = styled.select`
  ${tw`border-none`}
`;

export const SProductsCards = styled.div`
  ${tw`flex flex-wrap gap-[15px] w-[702px]`}
`;
