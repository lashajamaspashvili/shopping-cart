import styled from "styled-components";
import tw from "twin.macro";

export const SCategory = styled.div`
  ${tw`cursor-pointer flex flex-col items-center`}
`;

export const SCategoryImgWrapper = styled.div`
  ${tw`w-[225px] h-[150px]`}
`;

export const SCategoryName = styled.div`
  ${tw`mt-3.5 text-[24px]`}

  font-style: normal;
  font-weight: 500;
  text-decoration: none;
`;
