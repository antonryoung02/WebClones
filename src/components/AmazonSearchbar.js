import React, {useRef} from "react";
import { BsSearch } from "react-icons/bs";
import {useProduct} from "../contexts/ProductContext";
import { BsCaretDownFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

function AmazonSearchbar(props) {
  const {products, clear, update} = useProduct();
  const searchbarRef = props.searchbarRef;
  const navigate = useNavigate();


  function handleSubmit() {
    const queryText = searchbarRef?.current?.value || "";
    clear();
    if (queryText) {
      navigate(`/`);
    }
  }

  function handleKeyDown(event) {
    if (event.key === 'Enter') {
      handleSubmit();
    }

  }

  return (
    <div className="flex w-full">
      <button className="w-12 h-10 bg-gray-200 rounded-l-lg hover:bg-gray-300">
        <div className="flex flex-row justify-center items-center gap-2">
        <p className="text-gray-500 text-xs font-semibold">All</p>
        <BsCaretDownFill size={10} style={{color:"#6b7280"}}/>
        </div>
      </button>
      <input
        ref={searchbarRef}
        onKeyDown={handleKeyDown}
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
