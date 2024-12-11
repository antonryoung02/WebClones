import { useState } from "react";

function ImageCollection(props) {
  const images = props.product.images;
  const [imageIndex, setImageIndex] = useState(0);

  return (
    <div className="flex flex-row w-full lg:items-start lg:justify-between sticky top-0">
      <div className="flex flex-col items-center lg:items-end bg-white lg:w-2/5 lg:py-12 gap-1">
        {images.map((image, index) => (
          <button
            key={index}
            onMouseEnter={() => setImageIndex(index)}
            className={`flex border-separate border box-border border-gray-300 rounded-md w-12 h-12 justify-center ${index === imageIndex ? "border-sky-700 border-2" : ""}`}
          >
            <img
              src={image}
              className={` border-separate h-12 w-auto rounded-md p-1`}
              alt={props.product.id + "_" + index}
            ></img>
          </button>
        ))}
      </div>
      <div className=" lg:h-[36rem] lg:w-[36rem] flex justify-center">
        <img
          src={images[imageIndex]}
          className="lg:h-[36rem] w-auto object-contain"
          alt={props.product.id}
        ></img>
      </div>
    </div>
  );
}

export default ImageCollection;
