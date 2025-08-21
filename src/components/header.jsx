import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="relative w-full">
      <div className="custom-container">
        <div className="flex justify-between items-center py-[20px] md:py-[24px] lg:py-[28px]">
     
          <div className="flex items-center">
            <a href="/" aria-label="Infinity & Beyond">
              <img
                src="/images/logo.svg"
                alt="Infinity & Beyond"
                className="2xl:max-w-[280px] md:max-w-[240px] sm:max-w-[200px] max-w-[160px] h-auto filter brightness-110 contrast-125"
              />
            </a>
          </div>

          <div className="hidden xl:flex items-center space-x-[24px]">
             <a 
            href="/" 
            className="px-[24px] py-[10px] bg-[#1A1A1D] border border-[#555555] rounded-full text-[#FFFFFF] font-medium text-lg hover:bg-[#333333] hover:border-[#777777] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
           Home
          </a>
             <a 
            href="/about" 
            className="px-[24px] py-[10px] bg-[#1A1A1D] border border-[#555555] rounded-full text-[#FFFFFF] font-medium text-lg hover:bg-[#333333] hover:border-[#777777] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            About
          </a>
           
          <a 
            href="/blog" 
            className="px-[24px] py-[10px] bg-[#1A1A1D] border border-[#555555] rounded-full text-[#FFFFFF] font-medium text-lg hover:bg-[#333333] hover:border-[#777777] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            Blog
          </a>
           <a 
            href="/jobjarvis" 
            className="px-[24px] py-[10px] bg-[#1A1A1D] border border-[#555555] rounded-full text-[#FFFFFF] font-medium text-lg hover:bg-[#333333] hover:border-[#777777] transition-all duration-300 shadow-[0_4px_12px_rgba(0,0,0,0.3)]"
          >
            Job Jarvis
          </a>
          </div>

          <div className="xl:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-[8px] rounded-lg bg-[#1A1A1D] border border-[#555555] hover:bg-[#333333] transition-colors"
            >
              {menuOpen ? (
                <FiX size={24} className="text-white" />
              ) : (
                <FiMenu size={24} className="text-white" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute left-0 right-0 w-full bg-[#0F0F0F] py-6 border-t border-[#333333] shadow-lg z-40 xl:hidden">
          <div className="custom-container">
            <div className="flex flex-col items-center space-y-4">
              <button className="w-full max-w-[280px] px-[32px] py-[12px] bg-[#1A1A1D] border border-[#555555] rounded-full text-[#FFFFFF] font-medium text-lg hover:bg-[#333333] transition-colors">
                The Job Journal
              </button>
              <button className="w-full max-w-[280px] px-[24px] py-[12px] bg-[#1A1A1D] border border-[#555555] rounded-full text-[#FFFFFF] font-medium text-lg hover:bg-[#333333] transition-colors">
                Job Jarvis
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
