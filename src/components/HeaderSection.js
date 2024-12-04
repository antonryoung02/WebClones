import React from "react";
import AmazonButton from "./AmazonButton";
import AmazonSearchbar from "./AmazonSearchbar";
import { BsList } from "react-icons/bs";
import { SiAmazon } from "react-icons/si";
import { BsCart } from "react-icons/bs";
import { Link } from "react-router-dom";
import {useCart} from "../contexts/CartContext";
import { useNavigate } from "react-router-dom";

function HeaderSection(props) {
  const f = () => {};
  const {cart, getNumItemsInCart} = useCart();
  const searchbarRef = props.searchbarRef;
  const navigate = useNavigate()

  return (
    <div className="bg-emerald-800 h-auto w-full shadow-lg">
      <div className="flex flex-row p-3 gap-4 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <button onClick={() => navigate('/')}><SiAmazon size={40} color="white" /></button>
        <AmazonSearchbar searchbarRef={searchbarRef}/>
        <Link to="/cart">
        <div className="flex flex-row items-end">
          <div className="relative inline-block">
            <BsCart size={40} color="white" />
            <p className="text-white font-bold absolute inset-0 flex items-center justify-center mb-1">{(getNumItemsInCart())}</p>
          </div>
          <p className="text-white font-bold text-sm">Cart</p>
          </div>
        </Link>
      </div>
      <div className="flex px-3">
        <AmazonButton
          buttonEnum="navigation"
          innerHTML={
            <div className="flex items-center gap-1">
              <BsList size={20} style={{ strokeWidth:1 }}/>
              <p>All</p>
            </div>
          }
          func={f}
        />
        <AmazonButton
          buttonEnum="navigation"
          innerHTML="Holiday Deals"
          func={f}
        />
        <AmazonButton
          buttonEnum="navigation"
          innerHTML="Medical Care"
          func={f}
        />
        <AmazonButton
          buttonEnum="navigation"
          innerHTML="Amazon Basics"
          func={f}
        />
        <AmazonButton
          buttonEnum="navigation"
          innerHTML="Today's Deals"
          func={f}
        />
        <AmazonButton
          buttonEnum="navigation"
          innerHTML="Keep Shopping For"
          func={f}
        />
        <AmazonButton
          buttonEnum="navigation"
          innerHTML="Best Sellers"
          func={f}
        />
        <AmazonButton
          buttonEnum="navigation"
          innerHTML="Shop By Interest"
          func={f}
        />
        <AmazonButton buttonEnum="navigation" innerHTML="Household" func={f} />
        <AmazonButton buttonEnum="navigation" innerHTML="Baby Care" func={f} />
      </div>
    </div>
  );
}

export default HeaderSection;
