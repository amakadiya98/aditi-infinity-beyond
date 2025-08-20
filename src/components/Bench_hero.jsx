
// import React from 'react';

// export default function HeroSection() {
//   return (
//     <div className="bg-[#1A1A1D] h-screen flex flex-col relative overflow-hidden">
     
//       <div className="absolute top-6 left-6 pt-6">
//         <img 
//           src="/infinity.png"
//           alt="Logo"
//           className="h-20 w-auto"
//         />
//       </div>

//       <div className="absolute top-6 pt-6 right-6 flex gap-4">
//         <div className="relative h-[40px] rounded-[2rem] p-[0.2px] overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br 
//               from-white/70 via-white/20 to-transparent
//               before:absolute before:inset-0 before:bg-gradient-to-tl 
//               before:from-white/70 before:via-white/20 before:to-transparent">
//           </div>
//           <button className="bg-[#0E0E10]/90 backdrop-blur-sm rounded-3xl px-6 py-2 shadow-lg relative z-10">
//             <span className="text-white font-medium">The Job Journal</span>
//           </button>
//         </div>

//         {/* <div className="relative h-[40px] rounded-[2rem] p-[0.2px] overflow-hidden">
//           <div className="absolute inset-0 bg-gradient-to-br 
//               from-white/70 via-white/20 to-transparent
//               before:absolute before:inset-0 before:bg-gradient-to-tl 
//               before:from-white/70 before:via-white/20 before:to-transparent">
//           </div>
//           <button className="bg-[#0E0E10]/90 backdrop-blur-sm rounded-3xl px-6 py-2 shadow-lg relative z-10">
//             <span className="text-white font-medium">Job Jarvis</span>
//           </button>
//         </div> */}
//       <div className="relative h-[40px] rounded-[2rem] p-[0.2px] overflow-hidden">
//   <div className="absolute inset-0 bg-gradient-to-br 
//       from-white/70 via-white/20 to-transparent
//       before:absolute before:inset-0 before:bg-gradient-to-tl 
//       before:from-white/70 before:via-white/20 before:to-transparent">
//   </div>
//   <a 
//     href="https://jobjarvis.infinityandbeyond.co/"
//     target="_blank"
//     rel="noopener noreferrer"
//     className="bg-[#0E0E10]/90 backdrop-blur-sm rounded-3xl px-6 py-2 shadow-lg relative z-10 inline-block hover:cursor-pointer"
//   >
//     <span className="text-white font-medium">Job Jarvis</span>
//   </a>
// </div>
//       </div>

    
//      <div className="absolute left-0 bottom-0 h-[90vh] w-[40vw] z-10 overflow-hidden">
//   <div className="relative h-full w-full" style={{ 
//     paddingBottom: '20vh', 
//     height: 'calc(90vh - 20vh)' 
//   }}>
//     <spline-viewer 
//       url="https://prod.spline.design/Fv5bBh2vItcF8-Gd/scene.splinecode"
//       loading="eager"
//       style={{ 
//         height: '100vh', 
//         width: '100%',
//         position: 'absolute',
//         top: 0
//       }}
//       events-target="global"
//       hide-ui="true"
//     ></spline-viewer>
//   </div>
// </div>

//       <div className="w-full pt-16 flex justify-center mt-6 z-20">
//         <img 
//           src="/infinity_beyond.png"
//           alt="Infinity Beyond"
//           className="h-16 w-auto"
//         />
//       </div>

//       <div className="absolute bottom-6 right-6 pr-8 z-20">
//         <div className="relative">
//           <img 
//             src="/first_card.png"
//             alt="Card Background"
//             className="rounded-[4rem] w-full max-w-[450px]"
//           />
          
//           <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
//             <p className="text-white text-xl font-sans">Every minute counts</p>
//             <div className="flex gap-1 items-end">
//               <h2 className="text-white font-semibold text-4xl mt-2">
//                 <span className="text-[#E3E3E3] font-poppins font-extrabold" style={{ transform: 'scaleY(1.2)', display: 'inline-block' }}>You're </span>
//               </h2>
//               <p className="text-white font-sm text-4xl mt-2 relative -top-2">
//                 <span className="text-[#E3E3E3] font-cormorant italic" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}> 90% more likely</span>
//               </p>
//             </div>
//             <h3 className="text-white text-4xl font-bold font-poppins font-extrabold" style={{ transform: 'scaleY(1.2)', display: 'inline-block' }}>to land interviews</h3>
//             <p className="text-gray-300 text-xl mt-1 font-sans mb-16">
//               Land more interviews by applying faster
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }






import React from 'react';

export default function HeroSection() {
  return (
    <div className="bg-[#1A1A1D] h-[80vh] flex flex-col relative overflow-hidden">
     
      {/* <div className="absolute top-6 left-6 pt-6">
        <img 
          src="/images/infinity.png"
          alt="Logo"
          className="h-20 w-auto"F
        />
      </div> */}

      
      {/* <div className="absolute top-6 pt-6 right-6 flex gap-4">
       
        <div className="relative h-[40px] rounded-[2rem] p-[0.2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br 
              from-white/70 via-white/20 to-transparent
              before:absolute before:inset-0 before:bg-gradient-to-tl 
              before:from-white/70 before:via-white/20 before:to-transparent">
          </div>
          <button className="bg-[#0E0E10]/90 backdrop-blur-sm rounded-3xl px-6 py-2 shadow-lg relative z-10">
            <span className="text-white font-medium">The Job Journal</span>
          </button>
        </div>

      
         <div className="relative h-[40px] rounded-[2rem] p-[0.2px] overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br 
              from-white/70 via-white/20 to-transparent
              before:absolute before:inset-0 before:bg-gradient-to-tl 
              before:from-white/70 before:via-white/20 before:to-transparent">
          </div>
          <a 
            href="https://jobjarvis.infinityandbeyond.co/" 
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#0E0E10]/90 backdrop-blur-sm rounded-3xl px-6 py-2 shadow-lg relative z-10 inline-block hover:cursor-pointer w-full h-full flex items-center justify-center"
          >
            <span className="text-white font-medium">Job Jarvis</span>
          </a>
        </div>
      </div> */}

    
     <div className="absolute left-0 bottom-0 h-[90vh] w-[40vw] z-10 overflow-hidden">
  <div className="relative h-full w-full" style={{ 
    paddingBottom: '20vh', 
    height: 'calc(90vh - 20vh)' 
  }}>
    <spline-viewer 
      url="https://prod.spline.design/Fv5bBh2vItcF8-Gd/scene.splinecode"
      loading="eager"
      style={{ 
        height: '100vh', 
        width: '100%',
        position: 'absolute',
        top: 0
      }}
      events-target="global"
      hide-ui="true"
    ></spline-viewer>
  </div>
</div>

      {/* <div className="w-full pt-16 flex justify-center mt-6 ">
        <img 
          src="/images/infinity_beyond.png"
          alt="Infinity Beyond"
          className="h-16 w-auto"
        />
      </div> */}

      <div className="absolute bottom-[11vh] right-6 pr-8 z-20"> {/* Changed from bottom-6 to bottom-[10vh] */}
        <div className="relative">
          <img 
            src="/images/first_card.png"
            alt="Card Background"
            className="rounded-[4rem] w-full max-w-[450px]"
          />
          
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-10">
            <p className="text-white text-xl font-sans">Every minute counts</p>
            <div className="flex gap-1 items-end">
              <h2 className="text-white font-semibold text-4xl mt-2">
                <span className="text-[#E3E3E3] font-poppins font-extrabold" style={{ transform: 'scaleY(1.2)', display: 'inline-block' }}>You're </span>
              </h2>
              <p className="text-white font-sm text-4xl mt-2 relative ">
                <span className="text-[#E3E3E3] font-cormorant italic" style={{ transform: 'scaleY(1.4)', display: 'inline-block' }}> 90% more likely</span>
              </p>
            </div>
            <h3 className="text-white text-4xl font-bold font-poppins font-extrabold" style={{ transform: 'scaleY(1.2)', display: 'inline-block' }}>to land interviews</h3>
            <p className="text-gray-300 text-xl mt-1 font-sans mb-16">
              Land more interviews by applying faster
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
