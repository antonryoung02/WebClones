import { useCart } from "../contexts/CartContext";
import { useState, useEffect } from "react";
import { productClient } from "../api/ProductClient";
import ProductInCartCard from "../components/ProductInCartCard";
import Subtotal from "../components/Subtotal";
import AmazonButton from "../components/AmazonButton";
import ProductHistory from "../components/ProductHistory";

function Cart() {
  const { cart, getNumItems, getSubtotal, clear, update } = useCart();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const fetchProducts = async () => {
      const productPromises = Object.keys(cart).map((id) =>
        productClient.getProductWithId(id)
      );

      const resolvedProducts = await Promise.all(productPromises);
      setProducts(resolvedProducts);
    };
    fetchProducts();
  }, [cart]);

  return (
    <div className="flex flex-col bg-gray-200 ">
    <div className="flex flex-col lg:flex-row items-start justify-center ">
      <div className="flex flex-col bg-white w-full lg:w-2/3 p-4 my-8 lg:ml-28 mx-4">
      <div className="flex flex-row justify-between items-end px-8 py-2">        
        <p className="text-3xl">Shopping Cart</p>
        <p>Price</p>
        </div>

        <hr />

        {products.length > 0 ? (
          products.map((product, index) => (
            <>
              <ProductInCartCard
                key={product.id}
                product={product}
                count={cart[product.id]}
              />
              <hr />
            </>
          ))
        ) : (
          <p className="text-xl px-8 py-2">Your Amazon Cart is empty</p>
        )}
        <div className="flex flex-row justify-end px-4 pt-4">
        <Subtotal products={products} />
        </div>
      </div>
      <div className="bg-white w-full lg:w-1/3 p-4 my-8 lg:mr-28 m-4">
        <Subtotal products={products} />
        <div className="flex flex-row gap-2 text-sm pt-2">
          <input type="checkbox" /> <p>This order contains a gift</p>
        </div>
        <AmazonButton
          buttonEnum="addToCart"
          innerHTML={"Proceed to checkout"}
          className="w-full"
        />
      </div>

    </div>
    <p className="px-28 text-xs">The price and availability of items at Amazon.com are subject to change. The Cart is a temporary place to store a list of your items and reflects each item's most recent price.</p>
      <p className="px-28 text-xs">Do you have a gift card or promotional code? We'll ask you to enter your claim code when it's time to pay</p>
      <div className="mt-6 bg-white">
        <p className="font-semibold text-2xl m-4">Your Browsing History</p>
        <ProductHistory />
      </div>
    </div>
  );
}
export default Cart;
