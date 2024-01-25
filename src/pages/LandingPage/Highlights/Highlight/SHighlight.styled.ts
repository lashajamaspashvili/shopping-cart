import styled, { css } from "styled-components";
import tw from "twin.macro";

type SHighlightProps = {
  size: "short" | "long";
  img: string;
};

export const SHighlight = styled.div<SHighlightProps>`
  ${tw`h-[383px] flex items-center justify-center relative`}

  ${(props) => {
    if (props?.size === "short") {
      return css`
        ${tw`w-[400px]`}
      `;
    } else {
      return css`
        ${tw`w-[655px]`}
      `;
    }
  }}

  ${(props) => {
    return css`
      background-image: url(${props?.img});
    `;
  }}
`;

export const SHighlightInfo = styled.div`
  ${tw`min-w-[191px] flex flex-col gap-1 py-6 px-3 absolute bottom-4 left-4`}

  border: 0.695px solid rgba(249, 250, 251, 0.05);

  background: rgba(0, 0, 0, 0.3);

  backdrop-filter: blur(13.894165992736816px);
`;

export const SHighlightInfoTitle = styled.div`
  ${tw`text-[#f9fafb] text-[13px]`}

  font-style: normal;
  font-weight: 400;
`;

export const SHighlightInfoText = styled.div`
  ${tw`text-[#f9fafb] text-[10px]`}

  font-style: normal;
  font-weight: 400;
`;

export const SHighlightText = styled.div`
  ${tw`text-[#fafafa] text-[39px]`}

  font-style: normal;
  font-weight: 400;
`;
