import { useState } from "react";

function ImageCollection(props) {
  const images = props.product.images;
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-row w-full items-start sticky top-0">
      <div className="flex flex-col items-end bg-white w-2/5 py-12">
        {images.map((image, index) => (
          <button
            onMouseEnter={() => setImageIndex(index)}
            className="border-separate border-2 border-transparent hover:border-sky-700  hover:rounded-md"
          >
            <img
              src={image}
              className={` border-separate h-16 w-auto border border-gray-300 rounded-md`}
              alt={props.product.id + "_" + index}
            ></img>
          </button>
        ))}
      </div>
      <img
        src={images[imageIndex]}
        className="w-3/4 h-auto  object-contain"
        alt={props.product.id}
      ></img>
    </div>
  );
}

export default ImageCollection;
