import MusicImage from "./home/musicImage";
import Musics from "./home/musics";
import Player from "./components/player/player";
import PageName from "./components/ui/pageName";
import Context from "./home/context";

export default function Home() {
  return (
    <section className="flex flex-col lg:p-4 p-2 h-full w-full gap-4">
      <div className="m-auto w-full max-w-[1000px]">
        <PageName small="خانه" title="جدیدترین آهنگ ها" />
        <div className="flex flex-col h-full pt-2">
          <Context>
            <div className="flex md:flex-row flex-col-reverse justify-center items-center lg:p-4 p-2 w-full md:h-[22rem] h-fit lg:gap-6 gap-4">
              <Musics />
              <MusicImage />
            </div>
            <Player />
          </Context>
        </div>
      </div>
    </section>
  );
}
