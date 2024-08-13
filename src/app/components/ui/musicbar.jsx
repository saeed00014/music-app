import { HomeContext } from "@/context/context";
import Image from "next/image";
import React, { useContext } from "react";

const Musicbar = ({ music }) => {
  const { setPlayingMusic, playingMusic } = useContext(HomeContext);

  return (
    <div
      id={music.id}
      onClick={() => setPlayingMusic(music)}
      className={`${
        playingMusic?.id === music?.id && "bg-lightMainbg"
      } flex w-full px-4 py-2 gap-4 hover:bg-lightMainbg rounded-[1rem] cursor-pointer`}
    >
      <Image
        alt="song picture"
        src={`/${music?.info}.jpg`}
        width={60}
        height={60}
        className="rounded-[1rem] min-h-[60px] min-w-[60px] object-cover"
      />
      <div className="flex justify-between items-center w-full">
        <div className="flex flex-col">
          <span>{music?.name}</span>
          <span>{music?.author}</span>
        </div>
      </div>
    </div>
  );
};

export default Musicbar;
