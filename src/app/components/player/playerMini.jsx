import React from "react";
import PlayerControls from "./playerControls/playerControls";
import PlayerProfile from "./playerProfile";

const PlayerMini = () => {
  return (
    <div className="flex items-center justify-center h-full w-full max-w-[1200px] py-2 md:px-4 px-1 lg:gap-8 gap-2">
      <PlayerControls />
      <PlayerProfile />
    </div>
  );
};

export default PlayerMini;
