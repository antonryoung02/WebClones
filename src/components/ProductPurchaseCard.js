import { useState } from "react";
import AmazonPriceText from "../components/AmazonPriceText";
import AmazonButton from "../components/AmazonButton";
import AmazonDropdown from "../components/AmazonDropdown";
import AddToCartButton from "./AddToCartButton";
import FreeReturnsLabel from "./FreeReturnsLabel";

function ProductPurchaseCard(props) {
  const product = props.product;
  const [productCount, setProductCount] = useState(1);

  return (
    <div className="flex flex-col w-full  border-2 border-gray-200 rounded-md p-6">
      <div className="flex flex-row justify-between items-center">
        <p>Buy new:</p>
        <input
          type="radio"
          className="w-5 h-5 appearance-none rounded-full border-2 border-gray-400 checked:border-cyan-700 checked:bg-cyan-700 relative 
checked:after:content-[''] checked:after:absolute checked:after:top-1/2 checked:after:left-1/2 checked:after:-translate-x-1/2 
checked:after:-translate-y-1/2 checked:after:w-2 checked:after:h-2 checked:after:bg-white checked:after:rounded-full"
          checked={true}
        />
      </div>
      <AmazonPriceText
        showList={false}
        showPaymentPlan={false}
        discount={product.discountPercentage}
        price={product.price}
      />
      <FreeReturnsLabel />
      <p className="text-sm">FREE Delivery. {product.shippingInformation}</p>
      {product.stock > 0 ? (
        <p className="text-lg text-green-700">In Stock</p>
      ) : (
        <p className="text-lg text-red-700">Out of Stock</p>
      )}
      <AmazonDropdown
        selectedIndex={productCount}
        setSelectedIndex={setProductCount}
      />
      <AddToCartButton id={product.id}/>
      <AmazonButton buttonEnum="buyNow" />

      <div className="flex flex-col gap-1 py-4">
        <div className="flex flex-row items-center gap-4">
          <p className="w-20 text-xs text-gray-500">Ships from</p>{" "}
          <p className="text-xs">Amazon.com</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          {" "}
          <p className="w-20 text-xs text-gray-500">Sold by</p>{" "}
          <p className="text-xs">Amazon.com</p>
        </div>
        <div className="flex flex-row items-center gap-4">
          {" "}
          <p className="w-20 text-xs text-gray-500">Returns</p>{" "}
          <p className="text-xs">Returnable</p>
        </div>
      </div>
    </div>
  );
}

export default ProductPurchaseCard;
