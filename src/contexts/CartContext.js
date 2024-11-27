import {useContext, createContext, useState, useEffect} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({});

    useEffect(() => {
        setCart(readFromLocalStorage());
    }, []);
    
    function readFromLocalStorage() {
        return JSON.parse(localStorage.getItem("cart")) || {};
      }
    
    function writeToLocalStorage(cart) {
        localStorage.setItem("cart", JSON.stringify(cart));
      }
    
      function clear() {
        setCart({});
        writeToLocalStorage({});
      }
    
      function getNumItems() {
        let count = 0;
        for (const key in cart) {
          count += cart[key];
        }
        return count;
      }
    
      function getSubtotal(products) {
        let cost = 0;
        products.forEach((p) => {
          cost +=
            Math.round(
              100 * p.price * (1 - p.discountPercentage * 0.01) * cart[p.id]
            ) / 100;
        });
        return cost;
      }
    
      function update(id, count) {
        let updatedCart = {... cart};
        if (id in updatedCart) {
          updatedCart[id] += count;
        } else {
          updatedCart[id] = count;
        }
        if (updatedCart[id] <= 0) {
          delete updatedCart[id];
        }
        setCart(updatedCart)
        writeToLocalStorage(updatedCart);
      }

    const exportValues = {
        cart,
        clear,
        getNumItems,
        getSubtotal,
        update,
    }

    return <CartContext.Provider value={exportValues}>{children}</CartContext.Provider>
}