import { BrowserRouter, Routes, Route } from "react-router-dom";
import Search from "./screens/Search";
import Cart from "./screens/Cart";
import Product from "./screens/Product";
import Checkout from "./screens/Checkout";
import "./App.css";
import HeaderSection from "./components/HeaderSection";
import FooterSection from "./components/FooterSection";
import {CartProvider} from "./contexts/CartContext";
import {ProductProvider} from "./contexts/ProductContext";
import {useRef} from "react";
import ScrollToTop from "./ScrollToTop";

function App() {

  return (
    <div>
      <BrowserRouter>
      <ProductProvider>
        <CartProvider>
          <HeaderSection />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Search />} />
            <Route path="/product/:product_id" element={<Product />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />}></Route>
          </Routes>
          <FooterSection />
        </CartProvider>
      </ProductProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
