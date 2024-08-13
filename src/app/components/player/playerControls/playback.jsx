import { HomeContext } from "@/context/context";
import UseOutClick from "@/hooks/useOutClick";
import React, { useContext, useState } from "react";

const Playback = ({ audioRef }) => {
  const { playbackSpeed, setPlaybackSpeed } = useContext(HomeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handlePlayBackSpeed = (speed) => {
    audioRef.current.playbackRate = speed;
    setPlaybackSpeed(speed);
    setIsOpen(false);
  };

  return (
    <div
      id="playBackPicker"
      className="group relative flex flex-col justify-center items-center w-[40px] h-[40px] gap-1"
    >
      {isOpen && (
        <UseOutClick eventFunc={setIsOpen} id="playBackPicker">
          <div
            id="playBackPicker"
            className="absolute bottom-[2.8rem] flex flex-col p-[3px] bg-lighterMainbg rounded-[.6rem]"
          >
            <span
              id="playBackPicker"
              onClick={() => handlePlayBackSpeed(0.5)}
              className="flex items-center justify-center w-[40px] h-[40px] hover:bg-lightMainbg text-center text-[.9rem] rounded-[.5rem] cursor-pointer"
            >
              0.5x
            </span>
            <span
              id="playBackPicker"
              onClick={() => handlePlayBackSpeed(1)}
              className="flex items-center justify-center w-[40px] h-[40px] hover:bg-lightMainbg text-center text-[.9rem] rounded-[.5rem] cursor-pointer"
            >
              1x
            </span>
            <span
              id="playBackPicker"
              onClick={() => handlePlayBackSpeed(1.5)}
              className="flex items-center justify-center w-[40px] h-[40px] hover:bg-lightMainbg text-center text-[.9rem] rounded-[.5rem] cursor-pointer"
            >
              1.5x
            </span>
            <span
              id="playBackPicker"
              onClick={() => handlePlayBackSpeed(2)}
              className="flex items-center justify-center w-[40px] h-[40px] hover:bg-lightMainbg text-center text-[.9rem] rounded-[.5rem] cursor-pointer"
            >
              2x
            </span>
          </div>
        </UseOutClick>
      )}
      <span
        id="playBackPicker"
        onClick={() => setIsOpen((p) => !p)}
        className="group flex items-center justify-center w-full h-full bg-lighterMainbg text-[1rem] text-center rounded-[.5rem] cursor-pointer"
      >
        {playbackSpeed}x
      </span>
    </div>
  );
};

export default Playback;
