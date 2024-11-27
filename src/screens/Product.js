import { useParams, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import StarRatings from "react-star-ratings";
import AmazonPriceText from "../components/AmazonPriceText";
import AmazonButton from "../components/AmazonButton";
import ReviewSection from "../components/ReviewSection";
import AmazonDropdown from "../components/AmazonDropdown";
import { BsChevronDown } from "react-icons/bs";
import ImageCollection from "../components/ImageCollection";
import ProductInformation from "../components/ProductInformation";
import ProductPurchaseCard from "../components/ProductPurchaseCard";
import RelatedProducts from "../components/RelatedProducts";
import ProductHistory from "../components/ProductHistory";
import { browsingHistoryService } from "../services/BrowsingHistoryService";

function Product(props) {
  const location = useLocation();
  const product = location.state.product;
  browsingHistoryService.addProductToHistory(product.id);

  return (
    <div className="flex flex-col px-12 py-6 bg-white">
      <div className="flex md:flex-row justify-center flex-col w-full h-full">
        <div className="w-full md:w-1/3">
          <ImageCollection product={product} />
        </div>
        <div className="bg-white w-full md:w-2/5 h-full px-4">
          <ProductInformation product={product} />
        </div>
        <div className="flex justify-center md:justify-normal bg-white w-full md:w-1/4 h-full">
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
        <p className="font-semibold text-2xl mt-4">Recently Viewed</p>
        <ProductHistory />
      </div>
    </div>
  );
}

export default Product;
