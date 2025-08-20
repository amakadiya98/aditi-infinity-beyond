import React from "react";
import { Gift } from "lucide-react";

export default function Subs() {
  const handleButtonClick = () => {
    window.open("https://jobjarvis.infinityandbeyond.co/", "_blank");
  };

  return (
    <div className="min-h-screen pt-20 bg-[#1A1A1D] flex flex-col items-center relative">
      <img
        src="/images/subscriptionplan.png"
        alt="Subscription Plans"
        className="w-[60%] max-w-4xl object-contain rounded-lg"
      />
      
      {/* नया डिज़ाइन वाला बटन जो थोड़ा नीचे है */}
      <button
        onClick={handleButtonClick}
        className="absolute bottom-[11%] left-1/2 transform -translate-x-1/2 
                  flex items-center gap-2 px-4 py-3 rounded-full text-white 
                  bg-black hover:bg-gray-900 transition border border-gray-500 z-10"
        style={{ 
          width: "auto", // चौड़ाई ऑटो रखी
        }}
      >
        <Gift size={16} />
        Try free demo
      </button>
    </div>
  );
}