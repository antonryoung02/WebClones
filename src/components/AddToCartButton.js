import React from "react";
import { useCart } from "../contexts/CartContext";

function AddToCartButton(props) {
  const className = props.className;
  const id = props.id;
  const { update } = useCart();


  return (
    <button
      className={
        "bg-yellow-300 rounded-2xl text-xs p-2 my-4 text-center hover:bg-yellow-400 " +
        className
      }
      onClick={() => update(id, 1)}
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
