import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import GlobalCSS from "./assets/styles/global.styled";
import { PageLayout } from "./components/PageLayout/PageLayout.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GlobalCSS />
    <PageLayout>
      <App />
    </PageLayout>
  </BrowserRouter>
);
