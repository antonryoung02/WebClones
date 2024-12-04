import {useLocation} from "react-router-dom";
import PurchasedProductCard from "../components/PurchasedProductCard";
import {useEffect} from "react";
import {useCart} from "../contexts/CartContext";

function Checkout(props) {
    const location = useLocation();
    const { products } = location.state || {};
    const {update} = useCart();
    console.log(products);

    useEffect(() => {
        products.forEach(([product, quantity]) => {
          update(product.id, -quantity);
        });
      }, [products]);

    return ( 
    <div className="flex flex-col items-center m-8">
        <p className="text-3xl">Thank you for your purchase!</p>
        <div className="flex flex-col w-1/2">
        {products.map(p => <PurchasedProductCard product={p[0]} count={p[1]}/>)}
        </div>
    </div>
    );
}

export default Checkout;