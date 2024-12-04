import AmazonButton from "./AmazonButton";
import AmazonPriceText from "./AmazonPriceText";
import {Link} from "react-router-dom";
import {useCart} from "../contexts/CartContext";

function PurchasedProductCard(props) {
    const product = props.product;
    const count = props.count;
    const {update} = useCart();

    return (
        <div>
          <div className="flex flex-row px-8 py-4 h-64 items-center">
            <div className="h-full">
            <img
              src={product.thumbnail}
              alt={product.title}
              className="h-full w-auto min-w-52"
            />
          </div>
          <div className="flex flex-row justify-between items-center w-full h-full">
            <div className="flex flex-col gap-1">
            <AmazonButton
                buttonEnum={"clickableText"}
                className="py-2"
                innerHTML={
                  <Link to={`/product/${product.id}`} state={{ product: product }}>
                    <p className="text-md leading-tight line-clamp-2">
                      {product.title}
                    </p>
                  </Link>
                }
              />
            </div>
            <div className="flex flex-col items-center justify-center h-full">
            <p>Count: {count}</p>
              <AmazonPriceText
                showList={false}
                showPaymentPlan={false}
                price={product.price}
                discount={product.discountPercentage}
              />
            </div>
            </div>
          </div>
        </div>
    );
}

export default PurchasedProductCard;