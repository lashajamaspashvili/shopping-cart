import { Header } from "../../components/Header";
import { Banner } from "./Banner";
import { Categories } from "./Categories";
import { Highlights } from "./Highlights";
import { SLandingPage } from "./SLandingPage.styled";
import { SpringCollections } from "./SpringCollections";

export function LandingPage() {
  return (
    <SLandingPage>
      <Header isLandingPage />
      <Banner />
      <Categories />
      <SpringCollections />
      <Highlights />
    </SLandingPage>
  );
}
