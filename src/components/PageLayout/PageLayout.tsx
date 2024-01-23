import { PropsWithChildren } from "react";
import { SFullPage, SPageContainer } from "./SPageLayout.styled";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <SFullPage>
      <SPageContainer>{children}</SPageContainer>
    </SFullPage>
  );
}
