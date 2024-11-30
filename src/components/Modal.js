import {useEffect} from "react";

function Modal({modalRef, isVisible, setIsVisible, children}) {

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsVisible(false);
      }
    };
    
    useEffect(() => {
      if (isVisible) {
        document.addEventListener("mousedown", handleClickOutside);
      } else {
        document.removeEventListener("mousedown", handleClickOutside);
      }
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [isVisible]);

    if (!isVisible) {
        return <div></div>
    }

    return ( 
        <div className="flex flex-col absolute top-full bg-white border-[1.5px] border-gray-200 rounded-lg z-10 p-3 ">
            {children}
        </div>
    )


}

export default Modal;