import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import GlobalCSS from "./assets/styles/global.styled";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <BrowserRouter>
    <GlobalCSS />
    <App />
  </BrowserRouter>
);
