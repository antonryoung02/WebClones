import { useCart } from "../contexts/CartContext";
function Subtotal(props) {
  const products = props.products;
  const { cart, getNumItems, getSubtotal, clear, update } = useCart();

  return (
    <div>
      <div className="flex flex-row gap-1 text-xl">
        {products.length > 0 ?
        <>
          <p>Subtotal: ({getNumItems()} items): </p>
          <p className="font-semibold">${getSubtotal(products)}</p>
        </>
        : 
        <p>No items selected</p>
}
      </div>
    </div>
  );
}

export default Subtotal;
