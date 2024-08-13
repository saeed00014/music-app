import { HomeContext } from "@/context/context";
import React, { useContext } from "react";
import { HiMiniSpeakerWave } from "react-icons/hi2";

const Sound = ({ audioRef }) => {
  const { soundRangeValue, setSoundRangeValue, isMuted, setIsMuted } =
    useContext(HomeContext);

  const handleVolume = (e) => {
    setSoundRangeValue(e.target.value);
    audioRef.current.volume = e.target.value / 100;
  };

  const handleMute = () => {
    if (isMuted) {
      audioRef.current.muted = false;
      setIsMuted(false);
      return;
    }
    audioRef.current.muted = true;
    setIsMuted(true);
  };

  return (
    <button className="group relative text-[2rem]">
      <div className="group absolute bottom-[4.8rem] -right-[2.2rem] hidden group-hover:flex justify-center items-center h-[2rem] p-2 rotate-90 bg-lighterMainbg rounded-[.3rem]">
        <input
          style={{
            direction: "rtl",
            background: `linear-gradient(to left, rgb(20, 20, 20) ${soundRangeValue}%, rgb(150, 150, 150) ${soundRangeValue}%,rgb(150, 150, 150) 100%)`,
          }}
          value={soundRangeValue}
          type="range"
          className="w-[6rem] h-full"
          onChange={(e) => handleVolume(e)}
        />
      </div>
      <div
        onClick={() => handleMute()}
        className="group flex items-center justify-center h-[40px] w-[40px] rounded-[.4rem]"
      >
        <HiMiniSpeakerWave />
      </div>
      <span
        className={`absolute top-0 rounded-full ${
          isMuted ? "h-full" : "h-0"
        } w-[3px] -rotate-45 bg-white`}
      ></span>
    </button>
  );
};

export default Sound;
