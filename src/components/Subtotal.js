import { useCart } from "../contexts/CartContext";
function Subtotal(props) {
  const products = props.products;
  const { cart, getNumItems, getSubtotal, clear, update } = useCart();

  return (
    <div>
      <div className="flex flex-row gap-1 text-xl">
        <p>Subtotal: ({getNumItems()} items): </p>
        <p className="font-semibold">${getSubtotal(products)}</p>
      </div>
    </div>
  );
}

export default Subtotal;
