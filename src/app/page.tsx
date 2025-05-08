"use client";
import { Toprow } from "./_components/toprow";
import { Rowbox } from "../components/rowbox";
import { InGameStats } from "./_components/inGameStats";
import { AccuStats } from "./_components/accuStat";
import { MissSafety } from "./_components/missSafety";
import { atom, useAtom } from "jotai";
import { PercentageRowbox } from "@/components/percentageRowbox";
import { dryBreaksleft, dryBreaksright } from "@/lib/recoil/atom/atom";

const gameScoreLeftAtom = atom(0);
const gameScoreRightAtom = atom(0);
const totalBreakLeftAtom = atom(0);
const totalBreakRightAtom = atom(0);
const winningStreakLeftAtom = atom(0);
const winningStreakRightAtom = atom(0);
const ballsPocketedLeftAtom = atom(0);
const ballsPocketedRightAtom = atom(0);
const ballsMissedLeftAtom = atom(0);
const ballsMissedRightAtom = atom(0);
const ballsMissedWithSafetyLeftAtom = atom(0);
const ballsMissedWithSafetyRightAtom = atom(0);
const unforcedErrorsLeftAtom = atom(0);
const unforcedErrorsRightAtom = atom(0);
const safetyErrorsLeftAtom = atom(0);
const safetyErrorsRightAtom = atom(0);
const kickingErrorsLeftAtom = atom(0);
const kickingErrorsRightAtom = atom(0);

const dryBreaksLeftAtom = atom(0);
const dryBreaksRightAtom = atom(0);

export default function Home() {
  const [gameScoreLeft, setGameScoreLeft] = useAtom(gameScoreLeftAtom);
  const [gameScoreRight, setGameScoreRight] = useAtom(gameScoreRightAtom);
  const [totalBreakLeft, setTotalBreakLeft] = useAtom(totalBreakLeftAtom);
  const [totalBreakRight, setTotalBreakRight] = useAtom(totalBreakRightAtom);
  const [winningStreakLeft, setWinningStreakLeft] = useAtom(
    winningStreakLeftAtom
  );
  const [winningStreakRight, setWinningStreakRight] = useAtom(
    winningStreakRightAtom
  );
  const [ballsPocketedLeft, setBallsPocketedLeft] = useAtom(
    ballsPocketedLeftAtom
  );
  const [ballsPocketedRight, setBallsPocketedRight] = useAtom(
    ballsPocketedRightAtom
  );
  const [ballsMissedLeft, setBallsMissedLeft] = useAtom(ballsMissedLeftAtom);
  const [ballsMissedRight, setBallsMissedRight] = useAtom(ballsMissedRightAtom);
  const [ballsMissedWithSafetyLeft, setBallsMissedWithSafetyLeft] = useAtom(
    ballsMissedWithSafetyLeftAtom
  );
  const [ballsMissedWithSafetyRight, setBallsMissedWithSafetyRight] = useAtom(
    ballsMissedWithSafetyRightAtom
  );
  const [unforcedErrorsLeft, setUnforcedErrorsLeft] = useAtom(
    unforcedErrorsLeftAtom
  );
  const [unforcedErrorsRight, setUnforcedErrorsRight] = useAtom(
    unforcedErrorsRightAtom
  );
  const [safetyErrorsLeft, setSafetyErrorsLeft] = useAtom(safetyErrorsLeftAtom);
  const [safetyErrorsRight, setSafetyErrorsRight] = useAtom(
    safetyErrorsRightAtom
  );
  const [kickingErrorslLeft, setKickingErrorsLeft] = useAtom(
    kickingErrorsLeftAtom
  );
  const [kickingErrorsRight, setKickingErrorsRight] = useAtom(
    kickingErrorsRightAtom
  );
  const [dryBreaksLeft, setDryBreaksLeft] = useAtom(dryBreaksLeftAtom);
  const [dryBreaksRight, setDryBreaksRight] = useAtom(dryBreaksRightAtom);

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
        <PercentageRowbox
          leftNumber={dryBreaksLeft}
          rightNumber={dryBreaksRight}
          setLeftNumber={setDryBreaksLeft}
          setRightNumber={setDryBreaksRight}
          boxTitle="Dry Breaks"
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
        />
        <Rowbox
          leftNumber={winningStreakLeft}
          rightNumber={winningStreakRight}
          setLeftNumber={setWinningStreakLeft}
          setRightNumber={setWinningStreakRight}
          boxTitle="Longest Game Winning Streak"
        />
        <InGameStats leftNumber={0} rightNumber={0} inGameStats={20} />
        <Rowbox
          leftNumber={ballsPocketedLeft}
          rightNumber={ballsPocketedRight}
          setLeftNumber={setBallsPocketedLeft}
          setRightNumber={setBallsPocketedRight}
          boxTitle="Balls Pocketed"
        />
        <Rowbox
          leftNumber={ballsMissedLeft}
          rightNumber={ballsMissedRight}
          setLeftNumber={setBallsMissedLeft}
          setRightNumber={setBallsMissedRight}
          boxTitle="Balls Missed"
        />
        <Rowbox
          leftNumber={ballsMissedWithSafetyLeft}
          rightNumber={ballsMissedWithSafetyRight}
          setLeftNumber={setBallsMissedWithSafetyLeft}
          setRightNumber={setBallsMissedWithSafetyRight}
          boxTitle="Balls Missed with safety"
        />
        <Rowbox
          leftNumber={unforcedErrorsLeft}
          rightNumber={unforcedErrorsRight}
          setLeftNumber={setUnforcedErrorsLeft}
          setRightNumber={setUnforcedErrorsRight}
          boxTitle="Unforced Errors"
        />
        <Rowbox
          leftNumber={safetyErrorsLeft}
          rightNumber={safetyErrorsRight}
          setLeftNumber={setSafetyErrorsLeft}
          setRightNumber={setSafetyErrorsRight}
          boxTitle="Safety Errors"
        />
        <Rowbox
          leftNumber={kickingErrorslLeft}
          rightNumber={kickingErrorsRight}
          setLeftNumber={setKickingErrorsLeft}
          setRightNumber={setKickingErrorsRight}
          boxTitle="Kicking Errors"
        />
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
