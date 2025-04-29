import Image from "next/image";
import { Toprow } from "./_components/toprow";
import { Rowbox } from "../components/rowbox";
import { InGameStats } from "./_components/inGameStats";
import { AccuStats } from "./_components/accuStat";
import { MissSafety } from "./_components/missSafety";

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
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Balls Pocketed" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Balls Missed" />
        <Rowbox
          leftNumber={1}
          rightNumber={2}
          boxTitle="Unforced
Errors"
        />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Safety Errors" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Kicking Errors" />
        <AccuStats leftNumber={0} rightNumber={0} boxTitle="ACCU-STAT" />
        <MissSafety
          leftNumber={0}
          rightNumber={0}
          boxTitle="ACCU-STAT with Miss Safety"
        />
      </div>
    </div>
  );
}
