"use client";
import { HomeContext } from "@/context/context";
import Image from "next/image";
import React, { useContext } from "react";

const MusicImage = () => {
  const { playingMusic } = useContext(HomeContext);

  return (
    <div className="relative flex h-full w-full rounded-[1rem] z-0">
      <div className="absolute top-0 bottom-0 right-0 left-0 z-0">
        <Image
          alt="song picture"
          src={`/${playingMusic?.info}.jpg`}
          width={300}
          height={300}
          className="w-full h-full object-cover rounded-[1rem]"
        />
      </div>
      <div className="relative z-10 flex items-end justify-end p-4 w-full h-full bg-gradient-to-t from-lightMainbg rounded-[1rem]">
        {/* <div className="text-4xl">
          {(playingReff?.current ? playingReff?.current?.paused : true) ? (
            <IoIosPlay />
          ) : (
            <IoIosPause />
          )}
        </div> */}
        <div className=" ">
          <h2>{playingMusic?.name}</h2>
          <span>{playingMusic?.author}</span>
        </div>
      </div>
    </div>
  );
};

export default MusicImage;
