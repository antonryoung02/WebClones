import React from "react";
import AmazonButton from "./AmazonButton";
import AmazonSearchbar from "./AmazonSearchbar";

function AmazonFilterSubsection(props) {
  const options = props.options;
  const title = props.title;
  const results = props.results;

  const onClickFilter = (e) => {
    console.log(e);
  };

  return (
    <div className="bg-white gap-12 px-12 py-2">
      <h1 className="text-md font-bold">{title}</h1>
      {options.map((e) => (
        <AmazonButton
          buttonEnum="clickableText"
          func={(end) => onClickFilter(e)}
          innerHTML={<p className="hover:text-orange-700">{e}</p>}
        />
      ))}
    </div>
  );
}

export default AmazonFilterSubsection;
