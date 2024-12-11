import React from "react";

function AmazonButton(props) {
  const enumStyles = {
    addToCart:
      "bg-yellow-300 rounded-2xl text-xs p-2 my-4 text-center hover:bg-yellow-400",
    buyNow:
      "bg-orange-400 rounded-2xl text-xs p-2 text-center hover:bg-orange-500",
    navigation:
      "mx-1 h-10 bg-[rgb(38,86,74)] rounded-sm box-border align-middle text-xs lg:text-sm p-2 text-center border text-white border-transparent hover:border-white hover:border",
    clickableText: "text-left text-xl",
  };

  const enumText = {
    addToCart: "Add to cart",
    buyNow: "Buy now",
  };

  const func = props.func || (() => {});
  const args = props.args || [];
  const buttonEnum = props.buttonEnum;
  const innerHTML = props.innerHTML || enumText[buttonEnum];
  const className = props.className;

  return (
    <button
      className={enumStyles[buttonEnum] + " " + className}
      onClick={() => func(...args)}
    >
      {innerHTML}
    </button>
  );
}

export default AmazonButton;
