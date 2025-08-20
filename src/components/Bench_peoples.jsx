import React from "react";

export default function Peoples() {
  const images = [   
    "/images/peoples.png",
  ];

  return (
    <div className=" bg-[#1A1A1D] ">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="w-[40%] max-w-4xl mx-auto object-contain rounded-lg block"
        />
      ))}
    </div>
  );
}
