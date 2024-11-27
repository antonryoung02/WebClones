import InStockLabel from "./InStockLabel";
import { BsChevronDown } from "react-icons/bs";
import AmazonPriceText from "./AmazonPriceText";
import { FiTrash, FiPlus, FiMinus } from "react-icons/fi";
import { useCart } from "../contexts/CartContext";

import { useState, useEffect } from "react";

function ProductInCartCard(props) {
  const product = props.product;
  const [count, setCount] = useState(props.count);
  const { cart, getNumItems, getSubtotal, clear, update } = useCart();

  const incrementCount = () => {
    update(product.id, 1);
    setCount(count + 1);
  };

  const decrementCount = () => {
    update(product.id, -1);
    setCount(count - 1);
  };

  return (
    <div>
      <div className="flex flex-row px-8 py-4 items-center">
        <input type="checkbox" />
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-60 w-auto"
        />
        <div className="flex flex-col gap-1">
          <p>{product.title}</p>
          <InStockLabel stock={product.stock} />
          <p className="text-sm">
            FREE Delivery. {product.shippingInformation}
          </p>
          <div className="flex flex-row gap-1 items-center">
            <p className="text-sky-700 text-sm">FREE Returns</p>
            <BsChevronDown style={{ strokeWidth: 1 }} />
          </div>
          <div className="flex flex-row gap-8 items-center rounded-xl border-2 border-separate border-yellow-400 w-fit">
            <button onClick={() => decrementCount()}>
              {count > 1 ? <FiMinus /> : <FiTrash />}
            </button>
            <p>{count}</p>
            <button onClick={() => incrementCount()}>
              {" "}
              <FiPlus />
            </button>
          </div>
        </div>
        <AmazonPriceText
          showList={true}
          showPaymentPlan={false}
          price={product.price}
          discount={product.discountPercentage}
        />
      </div>
    </div>
  );
}

export default ProductInCartCard;
