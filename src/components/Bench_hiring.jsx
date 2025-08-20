import React from "react";

export default function Hiring() {
  const images = [   
    "/images/hiring.png",  
  ];

  return (
    <div className=" bg-[#1A1A1D] flex flex-col items-center">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="w-full max-w-8xl h-auto relative object-contain rounded-lg "
        />
      ))}
    </div>
  );
}
