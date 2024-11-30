import {useLocation } from "react-router-dom";
import ReviewSection from "../components/ReviewSection";
import ImageCollection from "../components/ImageCollection";
import ProductInformation from "../components/ProductInformation";
import ProductPurchaseCard from "../components/ProductPurchaseCard";
import RelatedProducts from "../components/RelatedProducts";
import ProductHistory from "../components/ProductHistory";
import { browsingHistoryService } from "../services/BrowsingHistoryService";
import {useEffect} from "react";

function Product() {
  const location = useLocation();
  const product = location.state.product;

  
  useEffect(() => {
    if (product?.id) {
      browsingHistoryService.addProductToHistory(product.id);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="text-center mt-10">
        <p>Product information not available.</p>
        <button onClick={() => window.history.back()}>Go Back</button>
      </div>
    );
  }

  return (
    <div className="flex flex-col p-6 bg-white">
      <div className="flex lg:flex-row flex-col w-full h-full">
        <div className="w-full lg:w-1/3">
          <ImageCollection product={product} />
        </div>
        <div className="bg-white w-full lg:w-2/5 h-full px-4">
          <ProductInformation product={product} />
        </div>
        <div className="flex justify-center lg:justify-normal bg-white w-full lg:w-1/4 h-full">
          <div className="w-96">
            <ProductPurchaseCard product={product} />
          </div>
        </div>
      </div>
      <ReviewSection reviews={product.reviews} />
      <hr />
      <div>
        <p className="font-semibold text-2xl mt-4">Related Products</p>
        <RelatedProducts product={product} />
      </div>
      <hr />
      <div>
        <p className="font-semibold text-2xl mt-4">Your Browsing History</p>
        <ProductHistory />
      </div>
    </div>
  );
}

export default Product;
