"use client";
import { songs } from "@/assets/data";
import { HomeContext } from "@/context/context";
import React, { useEffect, useRef, useState } from "react";

const Context = ({ children }) => {
  const audioRef = useRef();
  const [newMusics, setNewMusics] = useState(songs);
  const [playingMusic, setPlayingMusic] = useState(songs[0]);
  const [currentRangeVlaue, setCurrentRangeValue] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [soundRangeValue, setSoundRangeValue] = useState(100);
  const [isMuted, setIsMuted] = useState(false);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    setCurrentRangeValue(0);
    setIsPlaying(false);
    setPlaybackSpeed(1);
  }, [playingMusic.id]);

  return (
    <HomeContext.Provider
      value={{
        newMusics,
        playingMusic,
        setPlayingMusic,
        currentRangeVlaue,
        setCurrentRangeValue,
        isPlaying,
        setIsPlaying,
        soundRangeValue,
        setSoundRangeValue,
        isMuted,
        setIsMuted,
        playbackSpeed,
        setPlaybackSpeed,
        audioRef,
        duration,
        setDuration,
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default Context;
