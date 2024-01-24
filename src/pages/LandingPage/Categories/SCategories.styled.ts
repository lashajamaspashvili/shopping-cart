import styled from "styled-components";
import tw from "twin.macro";

export const SCategories = styled.div`
  ${tw`mt-[143px] flex flex-col items-center gap-16`}
`;

export const SCategoriesTitle = styled.div`
  ${tw`text-[#41587B] text-[40px]`}

  font-style: normal;
  font-weight: 400;
`;

export const SArrowContainer = styled.div`
  ${tw`w-12 h-12 rounded-full border border-solid border-[#415878] flex items-center justify-center`}

  :hover {
    ${tw`cursor-pointer`}
  }
`;

export const SCategoriesContainer = styled.div`
  ${tw`flex items-center gap-11`}
`;

export const SCategoryCardsWrapper = styled.div`
  ${tw`flex items-center gap-8`}

  a {
    ${tw`text-[#272727]`}
    text-decoration: none;
  }
`;
