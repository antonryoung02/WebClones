import { useCart } from "../contexts/CartContext";
import { useState, useEffect } from "react";
import { productClient } from "../api/ProductClient";
import ProductInCartCard from "../components/ProductInCartCard";
import Subtotal from "../components/Subtotal";
import AmazonButton from "../components/AmazonButton";

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
    <div className="flex flex-col md:flex-row items-start justify-center bg-gray-100 ">
      <div className="flex flex-col bg-white w-full lg:w-2/3 p-6 my-8 lg:ml-28 mr-5">
        <p className="font-semibold text-2xl">Shopping Cart</p>
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
          <p>Your cart is empty</p>
        )}
      </div>
      <div className="bg-white w-full lg:w-1/3 p-6 my-8 lg:mr-28 ml-4">
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
