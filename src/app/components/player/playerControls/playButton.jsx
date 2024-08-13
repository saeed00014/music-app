import { HomeContext } from "@/context/context";
import React, { useContext } from "react";
import { IoIosPause } from "react-icons/io";
import { IoIosPlay } from "react-icons/io";

const PlayButton = ({ audioRef }) => {
  const { isPlaying, setIsPlaying } = useContext(HomeContext);

  const handlePlayPause = () => {
    if (audioRef?.current?.paused) {
      audioRef.current.play();
      setIsPlaying(true);
      return;
    }
    audioRef.current.pause();
    setIsPlaying(false);
  };

  return (
    <button onClick={() => handlePlayPause()} className="text-[2rem]">
      {isPlaying ? <IoIosPause /> : <IoIosPlay />}
    </button>
  );
};

export default PlayButton;
