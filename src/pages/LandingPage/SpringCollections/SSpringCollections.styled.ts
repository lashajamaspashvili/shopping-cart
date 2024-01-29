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

export const SSpringCollectionsCountdown = styled.div`
  ${tw`w-[280px] h-[60px] mt-[72px] flex items-center gap-4 justify-center bg-[#B1B1B1]`}// filter: blur(9.5px);
`;

export const SSpringCollectionsCountdownBoxWrapper = styled.div`
  ${tw`flex gap-2 items-start`}
`;

export const SSpringCollectionsCountdownBox = styled.div`
  ${tw`flex flex-col gap-1.5 items-center`}
`;

export const SSpringCollectionsCountdownNumber = styled.div`
  ${tw`text-[18px] text-[#272727]`}

  font-style: normal;
  font-weight: 400;
`;

export const SSpringCollectionsCountdownText = styled.div`
  ${tw`text-[12px] text-[#000]`}

  font-style: normal;
  font-weight: 400;
`;

export const SSpringCollectionsCountdownDots = styled.div`
  ${tw`text-[17px] text-[#272727]`}

  font-style: normal;
  font-weight: 400;
`;
