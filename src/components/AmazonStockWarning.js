import React from "react";

function AmazonStockWarning(props) {
  const stock = props.stock;

  return (
    <div>
      {stock < 5 && stock > 0 && (
        <p className="text-orange-700 text-sm">
          Only {stock} left in stock (more on the way).
        </p>
      )}
      {stock === 0 && (
        <p className="text-orange-700 text-sm">
          Product out of stock (more on the way).
        </p>
      )}
    </div>
  );
}

export default AmazonStockWarning;
