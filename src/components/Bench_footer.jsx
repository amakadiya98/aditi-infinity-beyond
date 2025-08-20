
// import React, { useState, useEffect } from 'react';
// import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
// import { NavLink, useLocation } from 'react-router-dom';

// const AnimatedFooterLogo = () => {
//   const [currentIndex, setCurrentIndex] = useState(0);
  
//   const texts = [
//     { content: "I & BE", className: "text-3xl font-bold text-white whitespace-nowrap font-sans" },
//     { content: "INFINITY AND BEYOND", className: "text-xl font-bold text-white whitespace-nowrap font-sans" }
//   ];

//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentIndex((prev) => (prev + 1) % texts.length);
//     }, 3000);
//     return () => clearInterval(interval);
//   }, [texts.length]);

//   return (
//     <div className="relative h-[50px] w-full flex items-center justify-start overflow-visible">
//       <div className="relative h-full flex items-center pb-8">
//         {/* I & BE */}
//         <div 
//           className={`absolute transition-opacity duration-1000 ${
//             currentIndex === 0 ? 'opacity-100' : 'opacity-0'
//           } ${texts[0].className}`}
//           style={{ 
//             fontFamily: "Arial, Helvetica, sans-serif",
//             left: '0'
//           }}
//         >
//           {texts[0].content}
//         </div>
        
//         {/* INFINITY AND BEYOND */}
//         <div 
//           className={`absolute transition-opacity duration-1000 ${
//             currentIndex === 1 ? 'opacity-100' : 'opacity-0'
//           } ${texts[1].className}`}
//           style={{ 
//             fontFamily: "Arial, Helvetica, sans-serif",
//             left: '0'
//           }}
//         >
//           {texts[1].content}
//         </div>
//       </div>
//     </div>
//   );
// };

// const TriangleFooter = () => {
//   const location = useLocation();
  


//   return (
//     <footer className="bg-[#1A1A1D] text-white pt-20 px-4 pb-4">
//       <div className="container mx-auto mt-10">
//         {/* Main Footer Content */}
//         <div className="flex flex-col md:flex-row md:gap-0 justify-center items-center">
          
//           {/* Left Section - Animated Logo and Social Media */}
//           <div className="w-full md:w-2/5 flex flex-col items-center md:items-start mb-16 ml-48 md:mb-0">
//             <AnimatedFooterLogo />
//             <div className="flex space-x-4 mt-6">
//               <a href="#" className="hover:text-[#E8C2C2] transition-colors">
//                 <FaInstagram size={24} />
//               </a>
//               <a href="#" className="hover:text-[#E8C2C2] transition-colors">
//                 <FaFacebook size={24} />
//               </a>
//               <a href="#" className="hover:text-[#E8C2C2] transition-colors">
//                 <FaTwitter size={24} />
//               </a>
//               <a href="#" className="hover:text-[#E8C2C2] transition-colors">
//                 <FaLinkedin size={24} />
//               </a>
//               <a href="#" className="hover:text-[#E8C2C2] transition-colors">
//                 <FaYoutube size={24} />
//               </a>
//             </div>
//           </div>

        
//         </div>

//         {/* Bottom Policy Links */}
//         <div className="border-t border-[#c44545] mt-8 pt-6">
//           <div className="flex flex-wrap justify-center gap-10 text-l">
//             <a href="mailto:nayakinaidu@infinityandbeyond.co" className="hover:text-[#E8C2C2] transition-colors">
//               nayakinaidu@infinityandbeyond.co
//             </a>
//             <a href="https://www.infinityandbeyond.co/" className="hover:text-[#E8C2C2] transition-colors">
//               https://www.infinityandbeyond.co/
//             </a>
//             <a href="#" className="hover:text-[#E8C2C2] transition-colors">Privacy-Policy</a>
//             <a href="#" className="hover:text-[#E8C2C2] transition-colors">Refund Policy</a>
//             <a href="#" className="hover:text-[#E8C2C2] transition-colors">Terms & Conditions</a>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default TriangleFooter;



















import React, { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';
import { NavLink, useLocation } from 'react-router-dom';

const AnimatedFooterLogo = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  
  const texts = [
    { content: "I & BE", className: "text-3xl font-bold text-white whitespace-nowrap font-sans" },
    { content: "INFINITY AND BEYOND", className: "text-xl font-bold text-white whitespace-nowrap font-sans" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <div className="relative h-[50px] w-full flex items-center overflow-visible">
      <div className="relative h-full flex items-center">
        {/* I & BE */}
        <div 
          className={`absolute transition-opacity duration-1000 ${
            currentIndex === 0 ? 'opacity-100' : 'opacity-0'
          } ${texts[0].className}`}
          style={{ 
            fontFamily: "Arial, Helvetica, sans-serif",
            left: '0'
          }}
        >
          {texts[0].content}
        </div>
        
        {/* INFINITY AND BEYOND */}
        <div 
          className={`absolute transition-opacity duration-1000 ${
            currentIndex === 1 ? 'opacity-100' : 'opacity-0'
          } ${texts[1].className}`}
          style={{ 
            fontFamily: "Arial, Helvetica, sans-serif",
            left: '0'
          }}
        >
          {texts[1].content}
        </div>
      </div>
    </div>
  );
};

const TriangleFooter = () => {
  const location = useLocation();

  return (
    <footer className="bg-[#1A1A1D] text-white pt-20 px-16 pb-4">
      <div className="container mx-auto mt-10">
        {/* Main Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center px-32">
          
          {/* Left Section - Animated Logo */}
          <div className="w-full md:w-auto mb-8 md:mb-0">
            <AnimatedFooterLogo />
          </div>
          
          {/* Right Section - Social Media */}
          <div className="w-full md:w-auto flex justify-center md:justify-end">
            <div className="flex space-x-6">
              <a href="#" className="hover:text-[#E8C2C2] transition-colors">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="hover:text-[#E8C2C2] transition-colors">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="hover:text-[#E8C2C2] transition-colors">
                <FaTwitter size={24} />
              </a>
              <a href="#" className="hover:text-[#E8C2C2] transition-colors">
                <FaLinkedin size={24} />
              </a>
              <a href="#" className="hover:text-[#E8C2C2] transition-colors">
                <FaYoutube size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Policy Links */}
        <div className="border-t border-[#c44545] mt-8 pt-6">
          <div className="flex flex-wrap justify-center gap-10 text-l">
            <a href="mailto:nayakinaidu@infinityandbeyond.co" className="hover:text-[#E8C2C2] transition-colors">
              nayakinaidu@infinityandbeyond.co
            </a>
            <a href="https://www.infinityandbeyond.co/" className="hover:text-[#E8C2C2] transition-colors">
              https://www.infinityandbeyond.co/
            </a>
            <a href="#" className="hover:text-[#E8C2C2] transition-colors">Privacy-Policy</a>
            <a href="#" className="hover:text-[#E8C2C2] transition-colors">Refund Policy</a>
            <a href="#" className="hover:text-[#E8C2C2] transition-colors">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default TriangleFooter;