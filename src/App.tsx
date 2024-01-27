import { Routes, Route } from "react-router-dom";
import { LandingPage, Product, Products } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<LandingPage />} />
      <Route path="/favourites" element={<LandingPage />} />
    </Routes>
  );
}

export default App;
