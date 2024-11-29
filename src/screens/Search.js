import { useState, useEffect, useRef } from "react";
import FilterSection from "../components/FilterSection";
import ResultSection from "../components/ResultSection";
import PaginationSentinel from "../components/PaginationSentinel";
import MoonLoader from "react-spinners/MoonLoader";
import { throttle } from 'lodash';
import {useProduct} from "../contexts/ProductContext";

function Search(props) {
  const [isLoading, setIsLoading] = useState(false);
  const sentinelRef = useRef(null);
  const {products, update, clear} = useProduct();
  const searchbarRef = props.searchbarRef;

  const callback = throttle( async() => {
    if (!isLoading) {
      await update(searchbarRef.current?.value || "");
    }
  }, 1000);

  useEffect(() => {
    const observer = new IntersectionObserver(callback);

    if (sentinelRef.current) {
      observer.observe(sentinelRef.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [])


  return (
    <div className="flex h-auto">
      <div className="flex flex-col w-full h-full items-center">
        <div className="flex flex-col md:flex-row w-full h-full">
          <FilterSection />
          <ResultSection results={products} />
        </div>
        <PaginationSentinel sentinelRef={sentinelRef}/>
        <MoonLoader loading={isLoading} size={60} color={"#38b7d8"} />
      </div>
    </div>
  );
}

export default Search;
