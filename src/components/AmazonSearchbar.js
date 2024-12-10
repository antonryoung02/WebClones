import React, {useRef} from "react";
import { BsSearch } from "react-icons/bs";
import {useProduct} from "../contexts/ProductContext";
import { BsCaretDownFill } from "react-icons/bs";
import { useLocation, useNavigate } from "react-router-dom";

function AmazonSearchbar(props) {
  const {clear} = useProduct();
  const location = useLocation();
  const navigate = useNavigate();
  const searchbarRef = useRef(null);


  function handleSubmit() {
    const queryText = searchbarRef?.current?.value || "";
    clear();
    if (queryText) {
      navigate(`/?q=${queryText}`);
    }
    else {
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
        className="w-1/2 h-10 pl-2 text-sm"
        type="text"
        placeholder="Search Amazon"
      ></input>
      <button className="w-11 h-10 bg-[rgb(169,23,111)] rounded-r-md hover:bg-[rgb(127,17,83)]" onClick={handleSubmit}>
        <div className="px-3 py-2">
          <BsSearch size={20} style={{ color: "white", strokeWidth: 0.5}} />
        </div>
      </button>
    </div>
  );
}

export default AmazonSearchbar;
