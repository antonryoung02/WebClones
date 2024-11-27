import {useState, useEffect} from "react";
import {productClient} from "../api/ProductClient";
import ProductCard from "./ProductCard";

function RelatedProducts(props) {

    // Queries ProductClient for products with the same tag as the current product.
    const product = props.product;
    const [relatedProducts, setRelatedProducts] = useState([]);
    console.log(`Got ${relatedProducts.length} related products`);

    useEffect(() => {
        const getRelatedProducts = async() => {
            if (product.tags.length === 0) {
                setRelatedProducts([]);
            } else {
            const result = await productClient.getProductsWithTag(product.tags[0]);
            console.log(`Got related products ${JSON.stringify(result)}`)
            setRelatedProducts(result);
            }
        }

        getRelatedProducts();
    }, [])

    return (
        <div className="flex flex-row gap-2">
          {relatedProducts.filter((p) => p.id !== product.id).map((product) => (
            <ProductCard key={product.id} product={product} type="sm" />
          ))}
        </div>
      );

}

export default RelatedProducts;