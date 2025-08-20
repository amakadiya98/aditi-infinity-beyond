
import React from "react";

export default function Reviews() {
  const images = ["/images/reviews.png"];

  return (
    <div className="bg-[#1A1A1D] flex flex-col items-center">
      <h2 className="bg-[#1A1A1D] text-white text-3xl font-bold my-4 w-full text-center">
        Our Reviews
      </h2>

      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="w-full max-w-8xl h-auto object-contain rounded-lg"
        />
      ))}
    </div>
  );
}
