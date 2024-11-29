import React from "react";
import AmazonButton from "./AmazonButton";
import StarRatings from "react-star-ratings";
import AmazonPriceText from "./AmazonPriceText";
import AmazonStockWarning from "./AmazonStockWarning";
import { Link } from "react-router-dom";
import AddToCartButton from "./AddToCartButton";
import ReviewService from "../services/ReviewService";
import Review from "./Review";

function ProductCard(props) {
  const product = props.product;
  const type = props.type;
  const reviewService = new ReviewService(props.product.reviews);

  const addToCart = (id) => {
    console.log(`Added item ${id}!`);
  };

  const viewItem = (product) => {
    console.log(`Viewing item ${product.id}!`);
  };

  if (type === "sm") {
    // small product cards need flex-col with image, truncated title, price, shipping information
    return  (
      <div className="flex flex-col items-center h-[108] bg-white"> 
             <img
          className="w-full h-auto px-4"
          src={product.thumbnail}
          alt={product.title}
        ></img> 
          <AmazonButton
            func={viewItem}
            args={[product]}
            buttonEnum={"clickableText"}
            innerHTML={
              <Link to={`/product/${product.id}`} state={{ product: product }}>
                <p className="text-md leading-tight hover:text-orange-700">
                  {product.title}
                </p>
              </Link>
            }
          />
          <div className="flex w-full gap-2 justify-center items-end">
            <StarRatings
              rating={reviewService.getMean()}
              starRatedColor="orange"
              numberOfStars={5}
              starDimension="16"
              starSpacing="1"
              name="rating"
            />
            <p className="text-sky-700 text-sm">{product.reviews.length}</p>
          </div>
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
    <div className="h-64 w-full bg-white border-2 border-gray-200 rounded-md">
      <div className="flex h-full">
        <img
          className="bg-gray-50 h-full"
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

          <div className="flex w-full items-end gap-2">
            <StarRatings
              rating={reviewService.getMean()}
              starRatedColor="orange"
              numberOfStars={5}
              starDimension="16"
              starSpacing="1"
              name="rating"
            />
            <p className="text-sky-700 text-sm">{product.reviews.length}</p>
          </div>
          <AmazonPriceText
            price={product.price}
            discount={product.discountPercentage}
            showList={true}
            showPaymentPlan={true}
          />
          <p className="text-sm">{product.shippingInformation}</p>
          <AmazonStockWarning stock={product.stock} />
          <AddToCartButton id={product.id} className={"w-24"} />
        </div>
      </div>
    </div>
  );
}
}

export default ProductCard;
