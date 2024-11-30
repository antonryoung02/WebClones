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
      <div className="flex flex-row px-8 py-4 h-64 items-center">
      <div class="relative">
        <input 
            type="checkbox" 
            checked={true} 
            id="custom-checkbox" 
            className="peer w-4 h-4 appearance-none border-2 border-gray-400 checked:border-cyan-700 checked:bg-cyan-700" 
        />
        <label 
            for="custom-checkbox" 
            className="absolute bottom-0.5 left-0 w-full h-full flex items-center justify-center text-white text-xs font-bold opacity-0 peer-checked:opacity-100">
            ✓
        </label>
    </div>
        <div className="h-full">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-full w-auto min-w-52"
        />
      </div>
      <div className="flex flex-row justify-between w-full h-full">
        <div className="flex flex-col gap-1">
        <AmazonButton
            buttonEnum={"clickableText"}
            className="py-2"
            innerHTML={
              <Link to={`/product/${product.id}`} state={{ product: product }}>
                <p className="text-md leading-tight line-clamp-2">
                  {product.title} - {product.description}
                </p>
              </Link>
            }
          />
          <InStockLabel stock={product.stock} />
          <p className="text-sm">
            FREE Delivery. {product.shippingInformation}
          </p>
          <FreeReturnsLabel /> 
          <div className="flex flex-row gap-2 items-center">
          <div className="flex flex-row gap-7 items-center rounded-full border-[3px] border-separate border-yellow-400 w-fit p-0.5">
            <button onClick={() => decrementCount()}>
              {getNumItemsWithId(product.id) > 1 ? <FiMinus style={{ strokeWidth: 3 }}/> : <FiTrash style={{ strokeWidth: 3 }}/>}
            </button>
            <p className="font-semibold text-sm">{getNumItemsWithId(product.id)}</p>
            <button onClick={() => incrementCount()}>
              {" "}
              <FiPlus style={{ strokeWidth: 3 }}/>
            </button>
          </div>
          <p className="text-gray-400">|</p>
          <button className="text-xs text-sky-700" onClick={() => removeItem()}>Delete</button>
          </div>
        </div>
        <div className="flex flex-col items-end h-full">
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
