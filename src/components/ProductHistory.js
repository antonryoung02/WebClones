import {useState, useEffect} from "react";
import { browsingHistoryService } from "../services/BrowsingHistoryService";
import ProductCard from "./ProductCard";
import {productClient} from "../api/ProductClient";

function ProductHistory() {
    const history = browsingHistoryService.getHistory();
    const [products, setProducts] = useState([]);

    useEffect(() => {
      const fetchProducts = async () => {
        const productPromises = history.map((id) =>
          productClient.getProductWithId(id)
        );
  
        const resolvedProducts = await Promise.all(productPromises);
        setProducts(resolvedProducts);
      };
      fetchProducts();
    }, []);
    
    return (    
        <div className="flex flex-row gap-2">
            {products.map((product) => (
            <ProductCard key={product.id} product={product} type="sm" />
            ))}
        </div>
    );
}

export default ProductHistory;