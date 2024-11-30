function InStockLabel(props) {
  const stock = props.stock;
  const className = props.className;

  if (stock > 10) {
    return <p className={`text-emerald-600 text-xs ${className}`}>In Stock</p>;
  } else if (stock > 0) {
    return (
      <p className={`text-red-600 text-xs ${className}`}>
        Only {stock} left, order soon
      </p>
    );
  } else {
    <p className={`text-red-600 text-xs ${className}`}>Out of Stock</p>;
  }
}

export default InStockLabel;
