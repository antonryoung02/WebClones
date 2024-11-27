import React from "react";
import AmazonButton from "./AmazonButton";
import AmazonSearchbar from "./AmazonSearchbar";
import { BsList } from "react-icons/bs";
import { SiAmazon } from "react-icons/si";
import { PiShoppingCart } from "react-icons/pi";
import { Link } from "react-router-dom";

function HeaderSection() {
  const f = () => {};
  return (
    <div className="bg-emerald-800 h-auto w-full shadow-lg">
      <div className="flex flex-row p-3 gap-4 bg-gradient-to-r from-emerald-900 to-emerald-700">
        <SiAmazon size={40} color="white" />
        <AmazonSearchbar />
        <Link to="/cart">
          <div className="flex flex-row items-end">
            <PiShoppingCart size={40} color="white" />
            <p className="text-white font-bold text-sm">Cart</p>
          </div>
        </Link>
      </div>
      <div className="flex px-3">
        <AmazonButton
          buttonEnum="navigation"
          innerHTML={
            <div className="flex items-center gap-2">
              <BsList size={20} />
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
