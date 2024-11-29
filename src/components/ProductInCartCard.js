import InStockLabel from "./InStockLabel";
import { BsChevronDown } from "react-icons/bs";
import AmazonPriceText from "./AmazonPriceText";
import { FiTrash, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";
import FreeReturnsLabel from "./FreeReturnsLabel";
import { useState, useEffect } from "react";
import AmazonButton from "./AmazonButton";
import { Link } from "react-router-dom";

function ProductInCartCard(props) {
  const product = props.product;
  const { cart, getNumItems, getNumItemsWithId, getSubtotal, clear, update } = useCart();

  const incrementCount = () => {
    update(product.id, 1);
  };

  const decrementCount = () => {
    update(product.id, -1);
  };

  const removeItem = () => {
    update(product.id, -getNumItemsWithId(product.id));
  }

  return (
    <div>
      <div className="flex flex-row px-8 py-4 h-56 items-center">
      <input type="checkbox" />
        <div className="w-1/3 h-full">
          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full w-auto"
          />
        </div>
        <div className="flex flex-row justify-between w-2/3 h-full">
        <div className="flex flex-col gap-1">
        <AmazonButton
            buttonEnum={"clickableText"}
            innerHTML={
              <Link to={`/product/${product.id}`} state={{ product: product }}>
                <p className="text-md leading-tight hover:text-orange-700">
                  {product.title}
                </p>
              </Link>
            }
          />
          <InStockLabel stock={product.stock} />
          <p className="text-sm">
            FREE Delivery. {product.shippingInformation}
          </p>
         <FreeReturnsLabel /> 
         <div className="flex flex-row gap-2">
          <div className="flex flex-row gap-8 items-center rounded-xl border-2 border-separate border-yellow-400 w-fit">
            <button onClick={() => decrementCount()}>
              {getNumItemsWithId(product.id) > 1 ? <FiMinus /> : <FiTrash />}
            </button>
            <p>{getNumItemsWithId(product.id)}</p>
            <button onClick={() => incrementCount()}>
              {" "}
              <FiPlus />
            </button>
          </div>
          <p className="text-gray-400">|</p>
          <button className="text-xs text-blue-600" onClick={() => removeItem()}>Delete</button>
          </div>
        </div>
        <div className="flex flex-col items-end h-full w-1/3">
          <AmazonPriceText
            showList={false}
            showPaymentPlan={false}
            price={product.price}
            discount={product.discountPercentage}
          />
        </div>
        </div>
      </div>
    </div>
  );
}

export default ProductInCartCard;
