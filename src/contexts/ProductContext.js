import {productClient} from "../api/ProductClient";
import {useContext, createContext, useState, useEffect, useRef} from "react";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const offsetRef = useRef(0);
    const foundEndOfSearchResults = useRef(false);

    function clear() {
        setProducts([]);
        offsetRef.current = 0;
        foundEndOfSearchResults.current = false;
    }

    async function update(searchQuery) {
        if (foundEndOfSearchResults.current === true) {
            return;
        }
        console.log(offsetRef.current);
        const fetchedProducts = await productClient.getProducts(offsetRef.current, searchQuery);
        if (fetchedProducts.products.length === 0) {
            foundEndOfSearchResults.current = true;
        }
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

