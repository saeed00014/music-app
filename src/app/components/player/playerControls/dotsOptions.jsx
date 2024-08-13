import React, { useState } from "react";
import { IoMdDownload } from "react-icons/io";
import { BsThreeDotsVertical } from "react-icons/bs";
import Playback from "./playback";

const DotsOptions = ({ audioRef }) => {
  const [isOptions, setIsOptoins] = useState(false);

  return (
    <div className="flex justify-center items-center w-[40px] h-[40px] bg-lighterMainbg py-1 rounded-[.4rem] cursor-pointer z-30">
      <BsThreeDotsVertical
        onClick={() => setIsOptoins((prev) => !prev)}
        className="text-[1.4rem]"
      />
      {isOptions && (
        <div className="absolute bottom-[3.5rem] flex flex-col gap-1 w-[40px] bg-lightMainbg">
          <a
            href="/sound1.mp3"
            download
            className="flex items-center justify-center w-[40px] h-[40px] text-[1.4rem] bg-lighterMainbg rounded-[.5rem]"
          >
            <IoMdDownload />
          </a>
          <div className="md:hidden flex">
            <Playback audioRef={audioRef} />
          </div>
        </div>
      )}
    </div>
  );
};

export default DotsOptions;
