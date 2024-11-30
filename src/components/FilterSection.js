import React from "react";
import AmazonButton from "./AmazonButton";
import AmazonSearchbar from "./AmazonSearchbar";
import AmazonFilterSubsection from "./AmazonFilterSubsection";

function FilterSection() {
  return (
    <div className="bg-white h-80 w-full py-4 md:w-1/5 md:h-full">
      <AmazonFilterSubsection title="By Category" options={["Category 1"]} />
      <AmazonFilterSubsection
        title="Customer Reviews"
        options={["Four stars & up"]}
      />
      <AmazonFilterSubsection title="Brands" options={["Four stars & up"]} />
      <AmazonFilterSubsection title="Price" options={["Four stars & up"]} />
      <AmazonFilterSubsection title="On Sale" options={["Four stars & up"]} />
    </div>
  );
}

export default FilterSection;
