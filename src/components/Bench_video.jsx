
import { useRef, useState } from "react";

export default function VideoSection() {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="w-full flex flex-col items-center py-16 bg-[#1A1A1D]">
      
      <h1 className="text-6xl font-bold text-white mb-12 text-center">
        Our Vision in Motion
      </h1>

      <div className="w-full max-w-5xl px-4">
        <div className="relative rounded-[3rem] overflow-hidden h-[500px] 
             border-[0.5px] border-gray-400/50">
          
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          {!isPlaying && (
            <div
              className="absolute inset-0 bg-black/50 flex items-center justify-center cursor-pointer"
              onClick={togglePlay}
            >
              <div className="absolute w-32 h-32 rounded-full border-2 border-white/40"></div>

              <div className="absolute w-28 h-28 rounded-full border-2 border-white/60"></div>

              <div className="relative w-20 h-20 rounded-full bg-white flex items-center justify-center">
              
                <div className="w-0 h-0 border-l-[18px] border-l-black border-t-[12px] border-t-transparent border-b-[12px] border-b-transparent ml-1"></div>
              </div>
            </div>
          )}

          {isPlaying && (
            <div
              className="absolute inset-0 cursor-pointer"
              onClick={togglePlay}
            ></div>
          )}
        </div>
      </div>
    </div>
  );
}