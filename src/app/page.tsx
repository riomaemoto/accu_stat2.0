import Image from "next/image";
import { Toprow } from "./_components/toprow";
import { Rowbox } from "../components/rowbox";
import { InGameStats } from "./_components/inGameStats";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center p-5 bg-green-200">
        <Toprow />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Game Score" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Total Break" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Dry Breaks" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Scratches on Break" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Ball Made on Break" />
        <Rowbox
          leftNumber={1}
          rightNumber={2}
          boxTitle="Shot After The Break"
        />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Break and Run" />
        <Rowbox
          leftNumber={1}
          rightNumber={2}
          boxTitle="Consecutive Break and Runs"
        />
        <Rowbox
          leftNumber={1}
          rightNumber={2}
          boxTitle="Longest Game Winning Streak"
        />
        <InGameStats leftNumber={1} rightNumber={1} inGameStats={20} />
      </div>
    </div>
  );
}
