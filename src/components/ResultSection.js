import React from "react";
import ProductCard from "./ProductCard";

function ResultSection(props) {
  const results = props.results;
  return (
    <div className="flex flex-col bg-white h-full w-full lg:w-11/12 p-4 gap-2">
      <div className="flex flex-col mt-2">
        <p className="text-xl font-bold">Results</p>
        <p className="text-sm text-gray-800">
          Check each product page for other buying options.
        </p>
      </div>
      {results.map((result, index) => (
        <ProductCard key={result.id} product={result} />
      ))}
    </div>
  );
}

export default ResultSection;
