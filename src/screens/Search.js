import { useState, useEffect } from "react";
import { productClient } from "../api/ProductClient";
import HeaderSection from "../components/HeaderSection";
import FilterSection from "../components/FilterSection";
import ResultSection from "../components/ResultSection";

function Search() {
  const [productMatches, setProductMatches] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await productClient.getProducts();
      setProductMatches(data.products);
    };
    fetchData();
  }, []);
  return (
    <div className="flex h-auto">
      <div className="w-full h-full">
        <div className="flex flex-col md:flex-row w-full h-full">
          <FilterSection />
          <ResultSection results={productMatches} />
        </div>
      </div>
    </div>
  );
}

export default Search;
