import React, {useRef} from "react";
import { BsSearch } from "react-icons/bs";
import {useProduct} from "../contexts/ProductContext";

function AmazonSearchbar(props) {
  const {products, clear, update} = useProduct();
  const searchbarRef = props.searchbarRef;

  function handleSubmit() {
    const queryText = searchbarRef?.current?.value || "";
    clear();
  }

  return (
    <div className="flex w-full">
      <button className="w-16 h-10 bg-gray-200 rounded-l-lg hover:bg-gray-300">
        {" "}
        All{" "}
      </button>
      <input
        ref={searchbarRef}
        className="w-1/2 h-10 pl-2"
        type="text"
        placeholder="Search Amazon"
      ></input>
      <button className="w-12 h-10 bg-fuchsia-700 rounded-r-lg hover:bg-fuchsia-900" onClick={handleSubmit}>
        <div className="px-3 py-2">
          <BsSearch size={24} style={{ color: "white" }} />
        </div>
      </button>
    </div>
  );
}

export default AmazonSearchbar;
