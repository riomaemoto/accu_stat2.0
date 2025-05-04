"use client";
import { Toprow } from "./_components/toprow";
import { Rowbox } from "../components/rowbox";
import {} from "@/lib/recoil/atom/atom";
import { InGameStats } from "./_components/inGameStats";
import { AccuStats } from "./_components/accuStat";
import { MissSafety } from "./_components/missSafety";
import { atom, useAtom, SetStateAction } from "jotai";
// import { PercentageRowbox } from "@/components/percentageRowbox";

const gameScoreLeftAtom = atom(0);
const gameScoreRightAtom = atom(0);
const totalBreakLeftAtom = atom(0);
const totalBreakRightAtom = atom(0);

export default function Home() {
  const [gameScoreLeft, setGameScoreLeft] = useAtom(gameScoreLeftAtom);
  const [gameScoreRight, setGameScoreRight] = useAtom(gameScoreRightAtom);
  const [totalBreakLeft, setTotalBreakLeft] = useAtom(totalBreakLeftAtom);
  const [totalBreakRight, setTotalBreakRight] = useAtom(totalBreakRightAtom);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center p-5">
        <Toprow />
        <Rowbox
          leftNumber={gameScoreLeft}
          rightNumber={gameScoreRight}
          setLeftNumber={setGameScoreLeft}
          setRightNumber={setGameScoreRight}
          boxTitle="Game Score"
        />
        <Rowbox
          leftNumber={totalBreakLeft}
          rightNumber={totalBreakRight}
          setLeftNumber={setTotalBreakLeft}
          setRightNumber={setTotalBreakRight}
          boxTitle="Total Break"
        />
        {/* <PercentageRowbox
          leftNumber={drLeftNumber}
          rightNumber={drRightNumber}
          boxTitle="Dry Breaks"
          setLeftNumber={setDrLeftNumber}
          setRightNumber={setDrRightNumber}
        />
        <PercentageRowbox
          leftNumber={0}
          rightNumber={0}
          boxTitle="Scratches on Break"
        />
        <PercentageRowbox
          leftNumber={0}
          rightNumber={0}
          boxTitle="Ball Made on Break"
        />
        <PercentageRowbox
          leftNumber={0}
          rightNumber={0}
          boxTitle="Shot After The Break"
        />
        <Rowbox leftNumber={0} rightNumber={0} boxTitle="Break and Run" />
        <PercentageRowbox
          leftNumber={0}
          rightNumber={0}
          boxTitle="Consecutive Break and Runs"
        /> */}
        <Rowbox
          leftNumber={0}
          rightNumber={0}
          boxTitle="Longest Game Winning Streak"
        />
        <InGameStats leftNumber={0} rightNumber={0} inGameStats={20} />
        <Rowbox leftNumber={0} rightNumber={0} boxTitle="Balls Pocketed" />
        <Rowbox leftNumber={0} rightNumber={0} boxTitle="Balls Missed" />
        <Rowbox
          leftNumber={0}
          rightNumber={0}
          boxTitle="Balls Missed with safety"
        />
        <Rowbox leftNumber={0} rightNumber={0} boxTitle="Unforced Errors" />
        <Rowbox leftNumber={0} rightNumber={0} boxTitle="Safety Errors" />
        <Rowbox leftNumber={0} rightNumber={0} boxTitle="Kicking Errors" />
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
