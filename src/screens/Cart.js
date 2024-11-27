import { cartService } from "../services/CartService";
import { useState, useEffect } from "react";
import { productClient } from "../api/ProductClient";
import ProductCard from "../components/ProductCard";
import ProductInCartCard from "../components/ProductInCartCard";
import Subtotal from "../components/Subtotal";
import AmazonButton from "../components/AmazonButton";

function Cart() {
  const [cartItems, setCartItems] = useState(cartService.getItems());
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productPromises = Object.keys(cartItems).map((id) =>
        productClient.getProductWithId(id)
      );

      const resolvedProducts = await Promise.all(productPromises);
      setProducts(resolvedProducts);
    };
    fetchProducts();
  }, [cartItems]);

  return (
    <div className="flex flex-row items-start justify-center gap-4 bg-gray-100 ">
      <div className="flex flex-col bg-white w-2/3 p-6  m-6">
        <p className="font-semibold text-2xl">Shopping Cart</p>
        <hr />

        {products.length > 0 ? (
          products.map((product, index) => (
            <>
              <ProductInCartCard
                product={product}
                count={cartItems[product.id]}
              />
              <hr />
            </>
          ))
        ) : (
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="bg-white w-1/6 p-6 m-6">
        <Subtotal products={products} />
        <div className="flex flex-row gap-2 text-sm">
          {" "}
          <input type="checkbox" /> <p>This order contains a gift</p>
        </div>
        <AmazonButton
          buttonEnum="addToCart"
          innerHTML={"Proceed to checkout"}
          className="w-full"
        />
      </div>
    </div>
  );
}
export default Cart;