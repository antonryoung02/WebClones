import { BsChevronDown } from "react-icons/bs";
import React, { useState, useEffect, useRef } from "react";
import { BsXLg } from "react-icons/bs";

function FreeReturnsLabel() {
    const [modalVisible, setModalVisible] = useState(false);
    const modalRef = useRef(null);

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setModalVisible(false);
      }
    };
  
    useEffect(() => {
      if (modalVisible) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [modalVisible]);
    
    return (
    <div ref={modalRef} className="relative">
        <button onClick={() => setModalVisible(!modalVisible)}>
            <div className="flex flex-row gap-1 items-center">
                <p className="text-sky-700 text-sm">FREE Returns</p>
                <BsChevronDown style={{ strokeWidth: 1 }} />
            </div>
        </button>

        {modalVisible &&         
        <div className="flex flex-col absolute top-full bg-white border-2 border-gray-200 rounded-lg z-10 p-2 w-72 text-sm">
            <div className="flex flex-row justify-between items-center pb-3">
            <p className="font-bold">Return this item for free</p>
            <button onClick={() => setModalVisible(!modalVisible)}><BsXLg style={{ strokeWidth: 2 }} /></button> 
            </div>
            <p>We offer easy, convenient returns with at least one free return option: no shipping charges. All returns must comply with our returns policy. </p>
            <p className="text-blue-600">Learn more about free returns.</p>
            <p className="font-bold">How to return the item?</p>
        </div>
        }
    </div>
    )
}

export default FreeReturnsLabel;