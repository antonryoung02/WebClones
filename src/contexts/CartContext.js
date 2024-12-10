import {useContext, createContext, useState, useEffect} from "react";

const CartContext = createContext();

export const useCart = () => useContext(CartContext);


export const CartProvider = ({children}) => {
    const [cart, setCart] = useState({});
    // The cart is a set of product id: count key:val pairs.

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

      function getNumItems(products) {
        let count = 0;
        for (const i in products) {
          if (products[i].id in cart) {
            count += cart[products[i].id];
          } else {
            count += 1;
          }
        }
        return count;
      }
    
      function getNumItemsInCart() {
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
            cost += p.price * (1 - p.discountPercentage * 0.01) * cart[p.id] || 1;
          }
        });
        return Math.round(100 * cost) / 100;
      }
    
      function update(id, count) {
        setCart((prevCart) => {
          let updatedCart = { ...prevCart };
          if (id in updatedCart) {
            updatedCart[id] += count;
          } else if (count > 0) {
            updatedCart[id] = count;
          }
          if (updatedCart[id] <= 0) {
            delete updatedCart[id];
          }
          writeToLocalStorage(updatedCart);
          return updatedCart;
        });
      }

    const exportValues = {
        cart,
        clear,
        getNumItems,
        getNumItemsInCart,
        getNumItemsWithId,
        getSubtotal,
        update,
    }

    return <CartContext.Provider value={exportValues}>{children}</CartContext.Provider>
}