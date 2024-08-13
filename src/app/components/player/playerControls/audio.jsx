import { HomeContext } from "@/context/context";
import React, { useContext } from "react";

const Audio = ({ audioRef }) => {
  const { playingMusic, setCurrentRangeValue, setDuration } =
    useContext(HomeContext);

  const handleAudioUpdate = () => {
    const range =
      (audioRef.current.currentTime * 100) / audioRef.current.duration;
    setCurrentRangeValue(range);
  };

  const handleLoad = (e) => {
    setDuration(e.target.duration);
  };

  return (
    <audio
      preload="metadata"
      className="hidden"
      onTimeUpdate={() => handleAudioUpdate()}
      ref={audioRef}
      id={playingMusic.id}
      src={`/${playingMusic?.info}.mp3`}
      controls
      onCanPlay={(e) => handleLoad(e)}
      onPlay={(e) => handleLoad(e)}
    ></audio>
  );
};

export default Audio;
