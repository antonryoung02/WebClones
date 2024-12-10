import {productClient} from "../api/ProductClient";
import {useContext, createContext, useState, useEffect, useRef} from "react";
import {useLocation} from "react-router-dom";

const ProductContext = createContext();

export const useProduct = () => useContext(ProductContext);

export const ProductProvider = ({children}) => {
    const [products, setProducts] = useState([]);
    const offsetRef = useRef(0);
    const foundEndOfSearchResults = useRef(false);
    const location = useLocation();

    function clear() { 
        // Responsibility to clear() search results given to Searchbar / Category Select components
        setProducts([]);
        offsetRef.current = 0;
        foundEndOfSearchResults.current = false;
    }

    async function update() {
        // All query information should be set in URLSearchParams and passed to getProducts.
        if (foundEndOfSearchResults.current === true) {
            return;
        }
        const params = new URLSearchParams(location.search);
        const searchQuery = params.get('q') || "";
        const category = params.get('category') || "";

        const fetchedProducts = await productClient.getProducts(offsetRef.current, searchQuery, category);
        if (fetchedProducts.products.length === 0) {
            foundEndOfSearchResults.current = true;
        }
        offsetRef.current += 1;
        setProducts((prevProducts) => [...prevProducts, ...fetchedProducts.products]);
    }

    const exportValues = {
        products,
        update,
        clear,
    }

    return (
        <ProductContext.Provider value={exportValues}>
            {children}
        </ProductContext.Provider>
    )
}

