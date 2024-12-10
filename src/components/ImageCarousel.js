import { BsChat, BsChevronRight } from "react-icons/bs";
import { BsChevronLeft } from "react-icons/bs";

function ImageCarousel(props) {
    const { index, setIndex, numItems, itemsPerPage, title, children } = props;

    function updateCarouselIndex(increment) {
        let newIndex = index + (itemsPerPage * increment);
        newIndex = Math.min(newIndex, numItems - itemsPerPage);
        newIndex = Math.max(newIndex, 0);
        setIndex(newIndex);
      }

    if (numItems === 0) {
        return <div></div>
    }

    return (
        <div className="h-[466px]">
            <div className="flex flex-row justify-between items-center p-4">
            <p className="font-semibold text-2xl">{title}</p>
            <p>Page {Math.ceil(index / itemsPerPage) + 1} of {Math.ceil( (numItems) / itemsPerPage)}</p>
            </div>
            <div className="flex flex-row justify-center items-center gap-4">
                <button className="w-10 h-10 flex justify-center items-center border-gray-400 border-[1px] rounded-lg" onClick={() => updateCarouselIndex(-1)}>
                    <BsChevronLeft style={{strokeWidth:1, color:"#9ca3af"}}/>
                </button>
                <div className="flex flex-row items-start">{children}</div>
                <button className="w-10 h-10 flex justify-center items-center border-gray-400 border-[1px] rounded-lg" onClick={() => updateCarouselIndex(1)}>
                    <BsChevronRight style={{strokeWidth:1, color:"#9ca3af"}} />
                </button>
            </div>
        </div>
    );
}

export default ImageCarousel;