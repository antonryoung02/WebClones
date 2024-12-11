import {useState, useEffect} from "react";
import { browsingHistoryService } from "../services/BrowsingHistoryService";
import ProductCard from "./ProductCard";
import {productClient} from "../api/ProductClient";
import ImageCarousel from "./ImageCarousel";

function ProductHistory() {
    const history = browsingHistoryService.getHistory();
    const [products, setProducts] = useState([]);
    const [index, setIndex] = useState(0);
    const [numItems, setNumItems] = useState(4); 

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
    
    useEffect(() => {
        const getScreenSize = () => {
          if (window.innerWidth >= 1248) {
            setNumItems(6);
        } else if (window.innerWidth >= 1024) {
          setNumItems(4);
        } else if (window.innerWidth >= 768) {
            setNumItems(3);
        } else {
            setNumItems(1);
        }
        setIndex(0);
        };
    
        getScreenSize();
        
        window.addEventListener("resize", getScreenSize);
        return () => window.removeEventListener("resize", getScreenSize);
    }, []);
    
    return (    
        <ImageCarousel index={index} setIndex={setIndex} itemsPerPage={numItems} numItems={products.length} title="Your Browsing History">
          <div className="flex flex-row gap-4">
          {products.slice(index, index+numItems).map((product) => (
              <ProductCard key={product.id} product={product} type="sm" />
          ))}
          </div>
        </ImageCarousel>
    );
}

export default ProductHistory;