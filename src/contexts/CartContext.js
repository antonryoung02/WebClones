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

      function getNumItemsWithId(id) {
        return cart[id];
      }
    
      function getSubtotal(products) {
        let cost = 0;
        products.forEach((p) => {
          if (p.id in cart) {
            cost += p.price * (1 - p.discountPercentage * 0.01) * cart[p.id];
          }
        });
        return Math.round(100 * cost) / 100;
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
        getNumItemsWithId,
        getSubtotal,
        update,
    }

    return <CartContext.Provider value={exportValues}>{children}</CartContext.Provider>
}