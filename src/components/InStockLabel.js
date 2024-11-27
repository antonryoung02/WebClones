function InStockLabel(props) {
  const stock = props.stock;
  const className = props.className;

  if (stock > 10) {
    return <p className={`text-green-500 ${className}`}>In Stock</p>;
  } else if (stock > 0) {
    return (
      <p className={`text-red-500 ${className}`}>
        Only {stock} left, order soon
      </p>
    );
  } else {
    <p className={`text-red-500 ${className}`}>Out of Stock</p>;
  }
}

export default InStockLabel;
