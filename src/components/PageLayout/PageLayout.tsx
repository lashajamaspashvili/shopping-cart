import { PropsWithChildren } from "react";
import { SFullPage, SPageContainer } from "./SPageLayout.styled";
import { Footer } from "../Footer";

export function PageLayout({ children }: PropsWithChildren) {
  return (
    <SFullPage>
      <SPageContainer>
        {children}
        <Footer />
      </SPageContainer>
    </SFullPage>
  );
}
