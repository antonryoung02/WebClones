import React, {useRef, useState} from "react";
import AmazonButton from "./AmazonButton";
import StarRatings from "react-star-ratings";
import AmazonPriceText from "./AmazonPriceText";
import AmazonStockWarning from "./AmazonStockWarning";
import { Link, useNavigate } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import ReviewService from "../services/ReviewService";
import Review from "./Review";
import ReviewDistributionModal from "./ReviewDistributionModal";

function ProductCard(props) {
  const product = props.product;
  const type = props.type;
  const reviewService = new ReviewService(product?.reviews || []);
  const navigate = useNavigate();

  const addToCart = (id) => {
    console.log(`Added item ${id}!`);
  };

  const viewItem = (product) => {
    console.log(`Viewing item ${product.id}!`);
  };


  if (type === "sm") {
    // small product cards need flex-col with image, truncated title, price, shipping information
    return  (
      <div className="flex flex-col items-center h-[108] w-64 bg-white"> 
      <div className="w-full h-[224px] ">
        <img
          className="w-full h-full px-4"
          src={product.thumbnail}
          alt={product.title}
        />
        </div>
          <AmazonButton
            func={viewItem}
            args={[product]}
            buttonEnum={"clickableText"}
            className="text-center"
            innerHTML={
              <Link to={`/product/${product.id}`} state={{ product: product }}>
                <p className="text-md leading-tight hover:text-orange-700  line-clamp-2">
                  {product.title}
                </p>
              </Link>
            }
          />
          <button className="flex flex-row items-end gap-2" onClick={() => navigate(`/product/${product.id}#reviews`)}>
          <StarRatings
            rating={reviewService.getMean()}
            starRatedColor="orange"
            numberOfStars={5}
            starDimension="16"
            starSpacing="1"
            name="rating"
          />
          <p className="text-sky-700 text-sm">{reviewService.getReviewCount()}</p>
        </button>
          <AmazonPriceText
            price={product.price}
            discount={product.discountPercentage}
            showList={false}
            showPaymentPlan={false}
          />
          <p className="text-sm">{product.shippingInformation}</p>
          <AmazonStockWarning stock={product.stock} />
          <AddToCartButton id={product.id} className={"w-24"} /> 
      </div>
    )
  } else {
  return (
    <div className="h-72 w-full bg-white border-[1px] border-gray-200 rounded-sm">
      <div className="flex h-full">
        <img
          className="bg-gray-50 h-full w-auto"
          src={product.thumbnail}
          alt={product.title}
        ></img>
        <div className="flex flex-col px-4 py-2">
          <p className="text-lg font-bold">{product.brand}</p>
          <AmazonButton
            func={viewItem}
            args={[product]}
            buttonEnum={"clickableText"}
            innerHTML={
              <Link to={`product/${product.id}`} state={{ product: product }}>
                <p className="text-lg leading-tight hover:text-orange-700">
                  {product.title} - {product.description}
                </p>
              </Link>
            }
          />

          <ReviewDistributionModal reviewService={reviewService} productId={product.id}/>
          <AmazonPriceText
            price={product.price}
            discount={product.discountPercentage}
            showList={true}
            showPaymentPlan={true}
          />
          <p className="text-sm">FREE Delivery. {product.shippingInformation}</p>
          <AmazonStockWarning stock={product.stock} />
          <AddToCartButton id={product.id} className={"w-24"} />
        </div>
      </div>
    </div>
  );
}
}

export default ProductCard;
