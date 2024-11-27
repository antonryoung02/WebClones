import React from "react";
import { BsSearch } from "react-icons/bs";

function AmazonSearchbar() {
  return (
    <div className="flex w-full">
      <button className="w-16 h-10 bg-gray-200 rounded-l-lg hover:bg-gray-300">
        {" "}
        All{" "}
      </button>
      <input
        className="w-1/2 h-10 pl-2"
        type="text"
        placeholder="Search Amazon"
      ></input>
      <button className="w-12 h-10 bg-fuchsia-700 rounded-r-lg hover:bg-fuchsia-900">
        <div className="px-3 py-2">
          <BsSearch size={24} style={{ color: "white" }} />
        </div>
      </button>
    </div>
  );
}

export default AmazonSearchbar;
