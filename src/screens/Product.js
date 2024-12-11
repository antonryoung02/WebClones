import {useLocation } from "react-router-dom";
import ReviewSection from "../components/ReviewSection";
import ImageCollection from "../components/ImageCollection";
import ProductInformation from "../components/ProductInformation";
import ProductPurchaseCard from "../components/ProductPurchaseCard";
import RelatedProducts from "../components/RelatedProducts";
import ProductHistory from "../components/ProductHistory";
import { browsingHistoryService } from "../services/BrowsingHistoryService";
import {useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import {productClient} from "../api/ProductClient";

function Product() {
  const location = useLocation();
  const {product_id} = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    if (location.hash) {
      const targetElement = document.querySelector(location.hash);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [product]);
  
  useEffect(() => {
      browsingHistoryService.addProductToHistory(product_id);

      const getProduct = async() => {
        const result = await productClient.getProductWithId(product_id);
        setProduct(result);
      }

      getProduct();
  }, [product_id]);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p>Product information not available.</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-2 lg:p-6 bg-white">
      <div className="flex lg:flex-row flex-col w-full h-full">
        <div className="w-full lg:w-2/5">
          <ImageCollection product={product} />
        </div>
        <div className="bg-white w-full lg:w-2/5 h-full px-4">
          <ProductInformation product={product} />
        </div>
        <div className="flex justify-center lg:justify-normal bg-white w-full lg:w-1/12 h-full">
          <div className="w-96">
            <ProductPurchaseCard product={product} />
          </div>
        </div>
      </div>
      <div id="reviews" className="lg:px-24 flex flex-col">
      <ReviewSection reviews={product.reviews} />
      <hr />
        <RelatedProducts product={product} />
      <hr />
        <ProductHistory />
        </div>
    </div>
  );
}

export default Product;
