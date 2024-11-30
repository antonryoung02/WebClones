import {useState, useEffect} from "react";
import {productClient} from "../api/ProductClient";
import ProductCard from "./ProductCard";
import ImageCarousel from "./ImageCarousel";

function RelatedProducts(props) {

    // Queries ProductClient for products with the same tag as the current product.
    const product = props.product;
    const [relatedProducts, setRelatedProducts] = useState([]);
    const [index, setIndex] = useState(0);

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
        <ImageCarousel index={index} setIndex={setIndex} itemsPerPage={4} numItems={relatedProducts.length} title="Related Products">
          {relatedProducts.slice(index, index+4).map((product) => (
            <ProductCard key={product.id} product={product} type="sm" />
          ))}
        </ImageCarousel>
      );

}

export default RelatedProducts;