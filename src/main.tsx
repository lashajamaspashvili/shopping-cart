import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import GlobalCSS from "./assets/styles/global.styled";
import { PageLayout } from "./components/PageLayout/PageLayout.tsx";
import { Provider } from "react-redux";
import { store } from "./state/store.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <Provider store={store}>
      <GlobalCSS />
      <PageLayout>
        <App />
      </PageLayout>
    </Provider>
  </BrowserRouter>
);
