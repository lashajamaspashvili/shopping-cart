import { Routes, Route } from "react-router-dom";
import { Cart, Favourites, LandingPage, Product, Products } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:id" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favourites" element={<Favourites />} />
    </Routes>
  );
}

export default App;
