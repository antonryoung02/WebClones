import React, {useState, useEffect} from "react";
import AmazonButton from "./AmazonButton";
import AmazonSearchbar from "./AmazonSearchbar";
import {useProduct} from "../contexts/ProductContext";
import {productClient} from "../api/ProductClient";
import { useLocation, useNavigate } from "react-router-dom";

// TODO CREATE FILTERING CONTEXT. When filters change you need to clear outputs and  rerun the search query
function SelectCategoryFilter(props) {
  const [categories, setCategories] = useState([]);
  const {products, update, clear} = useProduct();
  const location = useLocation();
  const navigate = useNavigate();
  const [categoryIsSelected, setCategoryIsSelected] = useState(false);

  useEffect(() => {
    const fetchCategories = async () => {
      const result = await productClient.getCategories();
      setCategories(result);
    }

    fetchCategories();
  },[])

  const removeQueryParam = () => {
    clear();
   navigate(`/`) 
  };

  const appendQueryParam = (value) => {
    clear();
   navigate(`/?category=${value}`) 
  };


  return (
    <div className="flex flex-col bg-white px-12 py-2">
      <h1 className="text-xl font-bold">Search by Category</h1>
      {categories.map((e, index) => (
        <AmazonButton
            key={index}
          buttonEnum="clickableText"
          func={appendQueryParam}
          args={[e]}
          innerHTML={<p className="hover:text-orange-700 text-sm">{e}</p>}
        />
      ))}
      {categoryIsSelected && <button onClick={() => removeQueryParam() }>Clear</button>}
    </div>
  );
}

export default SelectCategoryFilter;