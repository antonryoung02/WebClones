import { cartService } from "../services/CartService";
function Subtotal(props) {
  const products = props.products;

  return (
    <div>
      <div className="flex flex-row gap-1 text-xl">
        <p>Subtotal: ({cartService.getNumItems()} items): </p>
        <p className="font-semibold">${cartService.getSubtotal(products)}</p>
      </div>
    </div>
  );
}

export default Subtotal;
