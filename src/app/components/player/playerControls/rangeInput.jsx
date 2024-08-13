import { HomeContext } from "@/context/context";
import React, { useContext } from "react";

const RangeInput = ({ audioRef }) => {
  const { currentRangeVlaue, setCurrentRangeValue } = useContext(HomeContext);

  const handleRangeInput = (e) => {
    setCurrentRangeValue(e.target.value);
    const duration = audioRef.current.duration;
    const range = Number(e.target.value);
    const newTime = Number(((range * duration) / 100).toFixed(3));
    if (isFinite(newTime)) {
      audioRef.current.currentTime = newTime;
    }
  };

  return (
    <div className="w-full h-full">
      <input
        style={{
          direction: "ltr",
          background: `linear-gradient(to right, rgb(20, 20, 20) ${
            currentRangeVlaue || 0
          }%, rgb(150, 150, 150) ${
            currentRangeVlaue || 0
          }%,rgb(150, 150, 150) 100%)`,
        }}
        className={`w-full`}
        type="range"
        value={currentRangeVlaue || 0}
        onChange={(e) => handleRangeInput(e)}
      />
    </div>
  );
};

export default RangeInput;
