"use client";
import React, { useContext, useRef } from "react";
import Timer from "./timer";
import Sound from "./sound";
import DotsOptions from "./dotsOptions";
import Playback from "./playback";
import RangeInput from "./rangeInput";
import SkipButton from "./skipButton";
import PlayButton from "./playButton";
import Audio from "./audio";
import { HomeContext } from "@/context/context";

const PlayerControls = () => {
  const { audioRef } = useContext(HomeContext);

  return (
    <div className="flex items-center md:gap-2 gap-1 w-full">
      <Audio audioRef={audioRef} />
      <div className="flex justify-between items-center md:gap-2 gap-1">
        <DotsOptions audioRef={audioRef} />
        <div className="md:flex hidden">
          <Playback audioRef={audioRef} />
        </div>
      </div>
      <Sound audioRef={audioRef} />
      <div className="relative flex w-full md:gap-2 gap-1">
        <div className="md:static absolute right-0 left-0 -bottom-5">
          <Timer audioRef={audioRef} />
        </div>
        <RangeInput audioRef={audioRef} />
      </div>
      <div className="flex md:gap-2 gap-1">
        <SkipButton audioRef={audioRef} number={1} />
        <PlayButton audioRef={audioRef} />
        <SkipButton audioRef={audioRef} number={-1} classNmaes="rotate-180" />
      </div>
    </div>
  );
};

export default PlayerControls;
