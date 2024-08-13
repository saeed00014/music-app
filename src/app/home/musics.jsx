"use client";
import Musicbar from "@/app/components/ui/musicbar";
import { HomeContext } from "@/context/context";
import React, { useContext } from "react";

const Musics = () => {
  const { newMusics, playingMusic } = useContext(HomeContext);
  return (
    <div className="scrollerDiv scrollerStyle flex flex-col w-full h-full gap-2 overflow-y-auto scroll-smooth">
      {Array.isArray(newMusics) && newMusics[0] ? (
        newMusics?.map((music) => {
          return (
            <div key={music.id}>
              <Musicbar music={music} />
            </div>
          );
        })
      ) : (
        <Musicbar music={playingMusic} />
      )}
    </div>
  );
};

export default Musics;
