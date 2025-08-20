import { useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="relative w-full">
      <div className="flex justify-between items-center 2xl:me-[70px] md:me-[20px] me-[10px]">
        <div className="w-auto">
          <img src='/images/sub-logo.svg' alt="sub-logo" className='lg:max-w-[80px] md:max-w-[70px] sm:max-w-[60px] max-w-[50px]'/>
        </div>

        <div className="hidden xl:flex space-x-[21px] justify-center">
          <button className="px-[35px] border border-gray-500 py-[6px] rounded-full text-[#FFFFFF] shadow-[0_0_10px_rgba(255,255,255,0.2)] text-white font-medium text-xl whitespace-nowrap">
            The Job Journal
          </button>
          <button className="px-[15px] border border-gray-500 py-[6px] rounded-full font-medium  text-[#FFFFFF] text-xl whitespace-nowrap">
            Job Jarvis
          </button>
        </div>

        <div className="xl:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? (
              <FiX size={30} className="text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
            ) : (
              <FiMenu size={30} className="text-white shadow-[0_0_10px_rgba(255,255,255,0.2)]" />
            )}
          </button>
        </div>
      </div>

      <div className='flex justify-center'>
        <div className="flex  2xl:mt-[-60px] lg:mt-[-45px] md:mt-[-42px] sm:mt-[-40px] mt-[-30px]">
          <img src='/images/logo.svg' alt="logo" className='2xl:max-w-[566px] md:max-w-[450px] sm:max-w-[350px] max-w-[250px]'/>
        </div>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 w-full bg-[#1A1A1D] py-6 border-t border-gray-600 flex flex-col items-center justify-center space-y-2 z-40 [@media(min-width:1120px)]:hidden">
          <button className="px-[35px] border border-gray-500 py-[10px] rounded-full text-[#FFFFFF]  font-medium  text-xl whitespace-nowrap">
            The Job Journal
          </button>
          <button className="px-[25px] border border-gray-500 py-[10px] rounded-full text-[#FFFFFF] font-medium  text-xl whitespace-nowrap">
            Job Jarvis
          </button>
        </div>
      )}
    </div>
  )
}
