"use client";
import React from "react";
import PlayerMini from "./playerMini";

const player = () => {
  return (
    <div
      className="fixed bottom-0 left-0 right-0 h-[4rem]
      flex justify-center w-full z-50 bg-lightMainbg"
    >
      <div className="1flex justify-center w-full h-full max-w-[1200px] ">
        <PlayerMini />
      </div>
    </div>
  );
};

export default player;
