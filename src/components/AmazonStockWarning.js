import React from "react";

function AmazonStockWarning(props) {
  const stock = props.stock;
  const className = props.className;

  return (
    <div className={className}>
      {stock < 5 && stock > 0 && (
        <p className="text-orange-700">
          Only {stock} left in stock (more on the way).
        </p>
      )}
      {stock === 0 && (
        <p className="text-orange-700">
          Product out of stock (more on the way).
        </p>
      )}
    </div>
  );
}

export default AmazonStockWarning;
