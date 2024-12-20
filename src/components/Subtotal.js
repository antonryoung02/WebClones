import { useCart } from "../contexts/CartContext";
function Subtotal(props) {
  const products = props.products;
  const { cart, getNumItemsInCart, getSubtotal, clear, update } = useCart();

  return (
    <div>
      <div className="flex flex-row gap-1 text-xl">
        {products.length > 0 ?
        <>
          <p className="">Subtotal ({getNumItemsInCart()} {getNumItemsInCart() == 1 ? "item" : "items"}): </p>
          <p className="font-bold">${getSubtotal(products)}</p>
        </>
        : 
        <p className="font-semi">No items selected</p>
        }
      </div>
    </div>
  );
}

export default Subtotal;
