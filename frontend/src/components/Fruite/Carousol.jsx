import React, { useState } from "react";

const CarouselSlider = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative">
      <div className="overflow-hidden">
        <div className="flex">
          {data.map((item, index) => (
            <div
              key={index}
              className={`w-full transform transition-transform ${
                index === currentIndex ? "translate-x-0" : "translate-x-full"
              }`}
            >
              {/* Your slide content goes here */}
              <img src={item.image} alt={item.alt} />
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
      <button
        className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-l-md"
        onClick={prevSlide}
      >
        Prev
      </button>
      <button
        className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-gray-500 text-white px-4 py-2 rounded-r-md"
        onClick={nextSlide}
      >
        Next
      </button>
    </div>
  );
};

export default CarouselSlider;
