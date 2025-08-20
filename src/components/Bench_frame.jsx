import React from "react";

export default function Frame() {
  const images = [
    "/images/Frame.png",
  ];

  return (
    <div className=" bg-[#1A1A1D] flex flex-col items-center">
      {images.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`Image ${index + 1}`}
          className="w-[88%] max-w-4xl object-contain rounded-lg h-screen relative"
        />
      ))}
    </div>
  );
}
