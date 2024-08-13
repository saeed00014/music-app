import { HomeContext } from "@/context/context";
import Image from "next/image";
import React, { useContext } from "react";

const PlayerProfile = () => {
  const { playingMusic } = useContext(HomeContext);

  return (
    <div className="md:static absolute -top-[4.5rem] left-2 flex items-center justify-end md:p-0 p-3 h-full md:min-w-[180px] md:w-[180px] w-fit gap-3 bg-lightMainbg md:rounded-none rounded-[1rem] overflow-hidden">
      <div className="flex flex-col items-end">
        <span className="min-w-max">{playingMusic.name}</span>
        <span className="min-w-max text-[.8rem]">{playingMusic.author}</span>
      </div>
      <Image
        alt="song picture"
        src={`/${playingMusic?.info}.jpg`}
        width={50}
        height={50}
        className="object-cover min-w-[50px] min-h-[50px] rounded-[.4rem]"
      />
    </div>
  );
};

export default PlayerProfile;
