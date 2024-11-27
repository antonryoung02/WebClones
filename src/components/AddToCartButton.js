import React from "react";
import { cartService } from "../services/CartService";

function AddToCartButton(props) {
  const className = props.className;
  const id = props.id;

  return (
    <button
      className={
        "bg-yellow-300 rounded-2xl text-xs p-2 my-4 text-center hover:bg-yellow-400 " +
        className
      }
      onClick={() => cartService.update(id, 1)}
    >
      Add to cart
    </button>
  );
}

export default AddToCartButton;
