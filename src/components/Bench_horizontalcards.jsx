
import React from 'react';

const GlassCards = () => {
  return (
    <div className="bg-[#1A1A1D] px-4 sm:px-6 lg:px-8 pt-2">
      <div className="max-w-4xl mx-auto"> 
       
        <h1 className="text-center text-4xl font-bold text-white mb-8"> 
          Proof so bold, it doesn't just speak—it roars!
        </h1>
        
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center"> 
         
          <div className="relative w-full md:w-64 group"> 
            <div className="relative overflow-hidden rounded-xl p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300 rounded-xl opacity-30"></div>
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-5 h-28 flex flex-col justify-between border border-white/10 ">
                <div>
                  <h1 className="text-[1.4rem] font-bold text-white mb-1 font-sans">Zero Time Spent</h1> 
                  <p className="text-gray-300 text-sm font-sans ">Zero lost opportunities</p> 
                </div>
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 bg-white/5 rounded-full filter blur-md -translate-x-1/3 -translate-y-1/3"></div>
            </div>
          </div>
          
          <div className="relative w-full md:w-64 group">
            <div className="relative overflow-hidden rounded-xl p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300 rounded-xl opacity-30"></div>
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-5 h-28 flex flex-col justify-between border border-white/10">
                <div>
                  <h1 className="text-[1.4rem] font-bold text-white mb-1 font-sans">10x More Calls</h1>
                  <p className="text-gray-300 text-sm font-sans ">Get noticed Faster</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 bg-white/5 rounded-full filter blur-md -translate-x-1/3 -translate-y-1/3"></div>
            </div>
          </div>
          
          <div className="relative w-full md:w-64 group">
            <div className="relative overflow-hidden rounded-xl p-[1px]">
              <div className="absolute inset-0 bg-gradient-to-br from-gray-300 via-gray-400 to-gray-300 rounded-xl opacity-30"></div>
              <div className="bg-black/90 backdrop-blur-md rounded-xl p-5 h-28 flex flex-col justify-between border border-white/10">
                <div>
                  <h1 className="text-[1.4rem] font-bold text-white mb-1 font-sans">5x More Interviews</h1>
                  <p className="text-gray-300 text-sm font-sans ">Land more interviews</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 w-16 h-16 bg-white/5 rounded-full filter blur-md -translate-x-1/3 -translate-y-1/3"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlassCards;