import styled from "styled-components";
import tw from "twin.macro";
import Spring from "../../../assets/spring.png";

export const SSpringCollections = styled.div`
  ${tw`mt-[143px] w-[1200px] h-[530px] rounded-[30px]`}

  background-image: url(${Spring});
`;

export const SSpringCollectionsInfo = styled.div`
  ${tw`ml-[707px] flex flex-col`}

  a {
    ${tw`mt-6 ml-11`}
    text-decoration: none;
  }
`;

export const SSpringCollectionsText = styled.div`
  ${tw`mt-[70px] flex items-center gap-3 ml-11`}
`;

export const SSpringCollectionsBlueText = styled.span`
  ${tw`text-[28px] text-[#3E5673]`}
  font-style: normal;
  font-weight: 400;
`;

export const SSpringCollectionsRedText = styled.span`
  ${tw`text-[28px] text-[#DE4F46]`}
  font-style: normal;
  font-weight: 400;
`;

export const SSpringCollectionsButton = styled.div`
  ${tw`bg-[#fafafa] text-[#EB5757] px-3 py-2 flex items-center justify-between w-[145px]`}
`;
