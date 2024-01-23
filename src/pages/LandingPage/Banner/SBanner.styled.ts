import styled from "styled-components";
import tw from "twin.macro";
import Banner from "../../../assets/banner.png";

export const SBanner = styled.div`
  ${tw`w-full h-[780px] flex items-center justify-center rounded-[16px]`}

  background-image: url(${Banner});
`;

export const SBannerInfo = styled.div`
  ${tw`w-[730px] h-[350px] rounded-[20px] flex flex-col items-center gap-4 py-6`}

  background: rgba(247, 248, 250, 0.80);

  backdrop-filter: blur(12px);
`;

export const SBannerText = styled.div`
  ${tw`text-[36px] text-[#41587B] max-w-[300px] text-center`}
  font-style: normal;
  font-weight: 500;
`;

export const SBannerButton = styled.div`
  ${tw`bg-[#3D5572] rounded-lg text-[#fff] px-11 py-3.5`}
`;
