"use client";
import { HomeContext } from "@/context/context";
import { cn } from "@/utils/merge";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { MdSkipNext } from "react-icons/md";

const SkipButton = ({ audioRef, number, classNmaes }) => {
  const { setPlayingMusic, playingMusic, newMusics } =
    useContext(HomeContext);
  const router = useRouter();
  const handleSkip = (i) => {
    const playingMusicIndex = newMusics.findIndex(
      (music) => music.id === playingMusic.id
    );
    if (playingMusicIndex + i >= newMusics.length) {
      setPlayingMusic(newMusics[0]);
      router.push(`#${newMusics[0].id}`);
      audioRef.current.currentTime = 0;
      return;
    }
    if (0 > playingMusicIndex + i) {
      setPlayingMusic(newMusics[newMusics.length - 1]);
      router.push(`#${newMusics[newMusics.length - 1].id}`);
      audioRef.current.currentTime = 0;
      return;
    }
    setPlayingMusic(newMusics[playingMusicIndex + i]);
    router.push(`#${newMusics[playingMusicIndex + i].id}`);
    audioRef.current.currentTime = 0;
  };
  return (
    <MdSkipNext
      onClick={() => handleSkip(number)}
      className={cn("flex text-[2rem] cursor-pointer", classNmaes)}
    />
  );
};

export default SkipButton;
