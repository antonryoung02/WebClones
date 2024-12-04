import React from "react";
import { useCart } from "../contexts/CartContext";
import {useNavigate} from "react-router-dom";

function GoToCheckoutButton(props) {
  const className = props.className;
  const products = props.products;
  const title = props.title;
  const navigate = useNavigate();

  return (
    <button
      className={
        "bg-orange-400 rounded-2xl text-xs p-2 my-2 text-center hover:bg-orange-500" +
        className
      }
      disabled={products.length <= 0}
      onClick={() => navigate('/checkout', { state: { "products": products } })}
    >
      <p className="text-md">{title}</p>
    </button>
  );
}

export default GoToCheckoutButton; 
