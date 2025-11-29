import { Pause, Play, Star } from "lucide-react";
import Heading from "../../Common/Heading";
import { useRef, useState } from "react";

const LuxurySection = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleVideo = () => {
    if (!videoRef.current) return;

    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };
  return (
    <div className="max-w-[1320px] mx-auto px-4">
      <Heading
        tag={
          <div className="flex items-center gap-2 ">
            <Star size={22} fill="#313131" color="#313131" />
            <Star size={22} fill="#313131" color="#313131" />
            <Star size={22} fill="#313131" color="#313131" />
            <Star size={22} fill="#313131" color="#313131" />
          </div>
        }
        title="Where design innovation meets luxury."
      />

      <div className=" rounded-[40px]  w-full bg-white p-6">
        <div className="rounded-[40px] h-[500px] overflow-hidden relative">
          <video
            ref={videoRef}
            muted
            loop
            playsInline
            style={{
              backgroundImage:
                'url("https://cdn.prod.website-files.com/68c0fe3ec8351d8382a5177c_1757391904279869-poster-00001.jpg")',
              objectFit: "cover",
            }}
          >
            <source
              src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb0f3%2F68c0fe3ec8351d8382a5177c_1757391904279869-transcode.mp4"
              type="video/mp4"
              data-wf-ignore="true"
            />
            <source
              src="https://cdn.prod.website-files.com/68c0e3e4af3be748783bb0f3%2F68c0fe3ec8351d8382a5177c_1757391904279869-transcode.webm"
              type="video/webm"
              data-wf-ignore="true"
            />
          </video>
          <button
            onClick={toggleVideo}
            className="flex items-center cursor-pointer justify-center px-3.5 py-3.5 bg-[#ffffffd8] text-white rounded-[99px] absolute bottom-4 right-10 z-9999"
          >
            {isPlaying ? (
              <Pause color="black" fill="black" size={25} />
            ) : (
              <Play color="black" fill="black" size={25} />
            )}
          </button>
        </div>
      </div>
      <div className="flex items-center justify-center gap-2.5 mt-10">
        <button className="bg-white py-2 px-3.5 border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
          Instant Booking
        </button>
        <button className="bg-white py-2 px-3.5 border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
          Exclusive
        </button>
        <button className="bg-white py-2 px-3.5 border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
          Newly Added
        </button>
        <button className="bg-white py-2 px-3.5 border border-[#f9f9f9] rounded-[26px] text-[14px] text-[#6c7072] font-light leading-[100%]">
          Best Value
        </button>
      </div>
    </div>
  );
};

export default LuxurySection;
