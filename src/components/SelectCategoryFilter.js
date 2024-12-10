import React, {useState, useEffect} from "react";
import AmazonButton from "./AmazonButton";
import AmazonSearchbar from "./AmazonSearchbar";
import {useProduct} from "../contexts/ProductContext";
import {productClient} from "../api/ProductClient";
import { useLocation, useNavigate } from "react-router-dom";

function SelectCategoryFilter(props) {
  const [categories, setCategories] = useState([]);
  const {clear} = useProduct();
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
    setCategoryIsSelected(false);
    navigate(`/`); 
  };

  const appendQueryParam = (value) => {
    clear();
    setCategoryIsSelected(true);
    navigate(`/?category=${value}`);
  };


  return (
    <div className="grid-cols-8 space-x-2 lg:flex lg:flex-col bg-white px-12 py-2 items-left">
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
      {categoryIsSelected && <button className="text-md text-left text-sky-700" onClick={() => removeQueryParam() }>Clear</button>}
    </div>
  );
}

export default SelectCategoryFilter;