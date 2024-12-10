import React, {useState, useEffect} from "react";
import AmazonButton from "./AmazonButton";
import AmazonSearchbar from "./AmazonSearchbar";
import SelectCategoryFilter from "./SelectCategoryFilter";

function FilterSection() {

  return (
    <div className="bg-white w-full py-4 md:w-1/5 md:h-full">
      <SelectCategoryFilter />
    </div>
  );
}

export default FilterSection;
