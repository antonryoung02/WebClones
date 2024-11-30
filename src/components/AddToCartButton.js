import React from "react";
import { useCart } from "../contexts/CartContext";

function AddToCartButton(props) {
  const className = props.className;
  const id = props.id;
  const { update } = useCart();


  return (
    <button
      className={
        "bg-yellow-300 rounded-2xl text-xs p-2 my-2 text-center hover:bg-yellow-400 " +
        className
      }
      onClick={() => update(id, 1)}
    >
      <p className="text-md">Add to cart</p>
    </button>
  );
}

export default AddToCartButton;
