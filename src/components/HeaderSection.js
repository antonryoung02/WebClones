import React, {useEffect, useState} from "react";
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
  const [showQuickLinks, setShowQuickLinks] = useState(true);
  const searchbarRef = props.searchbarRef;
  const navigate = useNavigate()

  useEffect(() => {
    const getScreenSize = () => {
    if (window.innerWidth >= 1024) {
      setShowQuickLinks(true)
    } else {
      setShowQuickLinks(false) 
    }
    };

    getScreenSize();
    
    window.addEventListener("resize", getScreenSize);
    return () => window.removeEventListener("resize", getScreenSize);
}, []);

  return (
    <div className="bg-[rgb(38,86,74)] h-auto w-full shadow-lg">
      <div className="flex flex-row p-2 gap-4 bg-gradient-to-r from-[rgb(23,60,50)] to-[rgb(49,113,78)]">
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

      <div className="flex px-3 text-sm lg:text-md min-h-4">
      {showQuickLinks && 
      <>
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
      </>
      }
      </div>
    </div>
  );
}

export default HeaderSection;
