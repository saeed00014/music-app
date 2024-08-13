import { HomeContext } from "@/context/context";
import useTimeConvertor from "@/hooks/useTimeConverter";
import React, { useContext } from "react";

const Timer = () => {
  const { currentRangeVlaue, duration } = useContext(HomeContext);

  return (
    <div className="flex md:justify-end justify-between md:w-fit w-full">
      {duration ? useTimeConvertor(duration) : <span>00:00</span>}
      <span className="md:flex hidden">/</span>
      {currentRangeVlaue ? (
        useTimeConvertor(currentRangeVlaue * duration / 100)
      ) : (
        <span>00:00</span>
      )}
    </div>
  );
};

export default Timer;
