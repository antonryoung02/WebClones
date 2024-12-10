import {useState, useEffect} from "react";
import { browsingHistoryService } from "../services/BrowsingHistoryService";
import ProductCard from "./ProductCard";
import {productClient} from "../api/ProductClient";
import ImageCarousel from "./ImageCarousel";

function ProductHistory() {
    const history = browsingHistoryService.getHistory();
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);
 
    useEffect(() => {
      const fetchProducts = async () => {
        const productPromises = history.map((id) =>
          productClient.getProductWithId(id)
        );
  
        const resolvedProducts = await Promise.all(productPromises);
        const definedProducts = resolvedProducts.filter(product => product !== undefined) 
        setProducts(definedProducts);
      };
      fetchProducts();
    }, []);
    
    return (    
        <ImageCarousel index={index} setIndex={setIndex} itemsPerPage={4} numItems={products.length} title="Your Browsing History">
          <div className="flex flex-row gap-4">
          {products.slice(index, index+4).map((product) => (
              <ProductCard key={product.id} product={product} type="sm" />
          ))}
          </div>
        </ImageCarousel>
    );
}

export default ProductHistory;