import styled from "styled-components";
import tw from "twin.macro";

export const SHighlights = styled.div`
  ${tw`flex flex-col gap-6 items-center mt-[113px] mb-[217px]`}
`;

export const SHighlightsTitle = styled.div`
  ${tw`text-[#41587B] text-[40px] max-w-[350px] text-center`}

  font-style: normal;
  font-weight: 400;
`;

export const SDivider = styled.div`
  ${tw`bg-[#374151] w-[61px] h-[3px]`}
`;

export const SHighlightCards = styled.div`
  ${tw`flex items-center gap-4 flex-wrap justify-center mt-6`}

  a {
    text-decoration: none;
  }
`;
