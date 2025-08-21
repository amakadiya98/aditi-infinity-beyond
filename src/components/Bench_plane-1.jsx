import React from "react";
import { Gift, Check } from "lucide-react";

export default function Subs1() {
  const handleButtonClick = () => {
    window.open("https://jobjarvis.infinityandbeyond.co/", "_blank");
  };

  const plans = [
    {
      price: 50,
      profiles: 1,
      features: [
        "Apply to 1000 jobs/M",
        "Coverletter",
        "AI ATS Match",
        "Referral Emails",
      ],
      isPopular: false,
    }
  ];

  return (
    <div className="min-h-screen pt-20 bg-[#1A1A1D] flex flex-col items-center relative px-4 sm:px-6 lg:px-8 font-dm">
   
      <div className="text-center mb-12 max-w-4xl">
        <h1 className="font-bricolage mb-6 tracking-tight text-[36px] sm:text-[44px] lg:text-[56px] bg-gradient-to-b from-white via-neutral-200 to-neutral-400 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.45)]">
          Subscription Plans
        </h1>
        <p className="font-dm text-gray-300 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
          Flexible pricing for any team size. It's a one-time payment — you only
          buy a license once, and all future updates are free for you forever.
        </p>
      </div>

    
      <div className="grid grid-cols-1 gap-6 lg:gap-8 max-w-7xl w-full mb-20">
        {plans.map((plan, index) => (
          <div
            key={index}
            className={`relative bg-black rounded-2xl p-6 sm:p-8 border-2 transition-all duration-300 hover:scale-[1.02] max-w-md w-full mx-auto overflow-hidden shadow-[0_12px_40px_rgba(0,0,0,0.45)] ${
              plan.isPopular
                ? "border-red-600 shadow-2xl shadow-red-600/20"
                : "border-gray-700 hover:border-gray-600"
            }`}
          >
          
            <div className="inline-block mb-6">
              <span className="font-dm bg-white text-[#8f1a16] px-3 py-1 rounded-md text-[12px] font-medium shadow-sm">
                Single User
              </span>
            </div>

        
            <div className="mb-6 sm:mb-8">
              <div className="flex items-baseline text-white">
                <span className="font-bricolage text-[22px] sm:text-[26px]">
                  $
                </span>
                <span className="font-dm ml-1 font-bold tracking-tight text-[40px] sm:text-[56px] lg:text-[72px]">
                  {plan.price.toLocaleString()}
                </span>
              </div>
            </div>

        
            <button
              onClick={handleButtonClick}
              aria-label={`Buy ${plan.name} for $${plan.price}`}
              className={`w-full py-4 px-6 rounded-full font-dm font-semibold text-base sm:text-lg mb-8 transition-all duration-300 flex items-center justify-center gap-2 ${
                plan.isPopular
                  ? "bg-gradient-to-r from-[#a41d1d] to-[#7e1414] hover:from-[#8f1818] hover:to-[#a41d1d] text-white shadow-[0_8px_30px_rgba(164,29,29,0.45)] ring-1 ring-red-500/50"
                  : "bg-gradient-to-r from-[#b32626] to-[#8e1a1a] hover:from-[#9f1a1a] hover:to-[#b32626] text-white shadow-[0_6px_24px_rgba(179,38,38,0.35)] ring-1 ring-red-500/30"
              }`}
            >
              Buy now
            </button>
            <div className="pointer-events-none absolute left-6 right-6 -mt-10 h-10 rounded-full blur-2xl bg-red-600/20" />

         
            <div className="space-y-4">
              <div className="flex items-center gap-3 text-gray-300">
                <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center">
                  <Check size={12} className="text-red-600" />
                </div>
                <span className="font-dm text-sm sm:text-base">
                  {plan.profiles} profile{plan.profiles > 1 ? "s" : ""}
                </span>
              </div>

              {plan.features.map((feature, featureIndex) => (
                <div
                  key={featureIndex}
                  className="flex items-center gap-3 text-gray-300"
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full border-2 border-red-600 flex items-center justify-center">
                    <Check size={12} className="text-red-600" />
                  </div>
                  <span className="font-dm text-sm sm:text-base">
                    {feature}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

    
    </div>
  );
}
