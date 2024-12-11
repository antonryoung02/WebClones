import {useState, useEffect} from "react";
import {productClient} from "../api/ProductClient";
import ProductCard from "./ProductCard";
import ImageCarousel from "./ImageCarousel";

function RelatedProducts(props) {

    // Queries ProductClient for products with the same tag as the current product.
    const product = props.product;
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [index, setIndex] = useState(0);

    const [numItems, setNumItems] = useState(4);
    
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

    useEffect(() => {
        const getRelatedProducts = async() => {
            if (product.tags.length === 0) {
                setRelatedProducts([]);
            } else {
            const result = await productClient.getProductsWithTags(product.tags);
            const resultWithoutProduct = result.filter((p) => p.id !== product.id);
            setRelatedProducts(resultWithoutProduct);
            }
        }

        getRelatedProducts();
    }, [])

    return (
        <ImageCarousel index={index} setIndex={setIndex} itemsPerPage={numItems} numItems={relatedProducts.length} title="Related Products">
          <div className="flex flex-row gap-4">
          {relatedProducts.slice(index, index+numItems).map((product) => (
            <ProductCard key={product.id} product={product} type="sm" />
          ))}
          </div>

        </ImageCarousel>
      );

}

export default RelatedProducts;