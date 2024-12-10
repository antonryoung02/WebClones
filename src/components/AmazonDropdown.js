import { useState, useRef, useEffect } from "react";
import { BsChevronDown } from "react-icons/bs";

function AmazonDropdown(props) {
  const selected = props.selectedIndex;
  const setSelected = props.setSelectedIndex;

  const [isOpen, setIsOpen] = useState(false); // Tracks dropdown visibility
  const dropdownRef = useRef(null); // Reference to the dropdown container

  const handleSelect = (value) => {
    setSelected(value);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative w-40 text-sm">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-2 border h-7 text-xs border-gray-300 bg-gray-100 rounded-lg w-full text-left focus:ring-2 focus:ring-sky-700"
      >
        <div className="flex flex-row justify-between items-center">
          <p>Quantity: {selected}</p> <BsChevronDown />
        </div>
      </button>

      {isOpen && (
        <div className="absolute bg-white border border-gray-300 rounded shadow-lg w-full h-48 overflow-y-scroll">
          {[...Array(30)].map((_, index) => (
            <div
              key={index + 1}
              onClick={() => handleSelect(index + 1)}
              className={`px-4 py-1 hover:bg-gray-100 cursor-pointer h-8 ${
                index + 1 === selected
                  ? "border-2 border-sky-700 bg-sky-100 hover:border-sky-700"
                  : ""
              }`}
            >
              {index + 1}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default AmazonDropdown;
