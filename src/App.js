import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./screens/Search";
import Cart from "./screens/Cart";
import Product from "./screens/Product";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import {CartProvider} from "./contexts/CartContext";
import ScrollToTop from "./ScrollToTop";

function App() {
  return (
    <div>
      <CartProvider>
      <BrowserRouter>
        <HeaderSection />
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/product/:product_id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        <FooterSection />
      </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;
