import styled, { css } from "styled-components";
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

  a {
    text-decoration: none;
  }
`;

export const SPagination = styled.div`
  ${tw`ml-auto mt-[60px] flex items-center gap-2`}
`;

type SPaginationBoxProps = {
  active?: boolean;
};

export const SPaginationBox = styled.div<SPaginationBoxProps>`
  ${tw`w-8 h-8 flex items-center justify-center border border-solid cursor-pointer rounded`}

  ${(props) => {
    if (props?.active) {
      return css`
        ${tw`text-[#374151] border-[#374151]`}
      `;
    } else {
      return css`
        ${tw`text-[#212B36] border-[#DFE3E8]`}
      `;
    }
  }}
`;

type SArrowContainerProps = {
  disabled?: boolean;
};

export const SArrowContainer = styled.div<SArrowContainerProps>`
  ${tw`w-8 h-8 rounded border border-solid border-[#DFE3E8] flex items-center justify-center cursor-pointer`}

  ${(props) => {
    if (props?.disabled) {
      return css`
        ${tw`bg-[#919EAB] text-[#C4CDD5]`}
      `;
    }
  }}
`;
