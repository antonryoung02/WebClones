import {productClient} from "../api/ProductClient";
import {useContext, createContext, useState, useEffect, useRef} from "react";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const offsetRef = useRef(0);

    function clear() {
        setProducts([]);
        offsetRef.current = 0;
    }

    async function update(searchQuery) {
        const fetchedProducts = await productClient.getProducts(offsetRef.current, searchQuery);
    
        offsetRef.current += 1
    
        setProducts((prevProducts) => [...prevProducts, ...fetchedProducts.products]);
    }

    const exportValues = {
        products,
        update,
        clear
    }

    return (
        <ProductContext.Provider value={exportValues}>
            {children}
        </ProductContext.Provider>
    )
}

