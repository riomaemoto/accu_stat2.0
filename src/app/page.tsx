"use client";
import { Toprow } from "./_components/toprow";
import { Rowbox } from "../components/rowbox";
import { InGameStats } from "./_components/inGameStats";
import { AccuStats } from "./_components/accuStat";
import { MissSafety } from "./_components/missSafety";
import { useAtom } from "jotai";
import { PercentageRowbox } from "@/components/percentageRowbox";
import {
  ballsMissedLeftAtom,
  ballsMissedRightAtom,
  ballsMissedWithSafetyLeftAtom,
  ballsMissedWithSafetyRightAtom,
  ballsPocketedLeftAtom,
  ballsPocketedRightAtom,
  gameScoreLeftAtom,
  gameScoreRightAtom,
  totalBreakLeftAtom,
  totalBreakRightAtom,
  unforcedErrorsLeftAtom,
  unforcedErrorsRightAtom,
  winningStreakLeftAtom,
  winningStreakRightAtom,
  kickingErrorsLeftAtom,
  kickingErrorsRightAtom,
  safetyErrorsLeftAtom,
  safetyErrorsRightAtom,
  dryBreaksLeftAtom,
  dryBreaksRightAtom,
  scratchesonBreakLeftAtom,
  scratchesonBreakRightAtom,
  ballsMadeonBreakLeftAtom,
  ballsMadeonBreakRightAtom,
  shotAfterTheBreakLeftAtom,
  shotAfterTheBreakRightAtom,
  consecutiveBreakandRunsRightAtom,
  consecutiveBreakandRunsLeftAtom,
} from "./atom";

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

  const [scratchesonBreakLeft, setScratchesonBreakleft] = useAtom(
    scratchesonBreakLeftAtom
  );
  const [scratchesonBreakRight, setScratchesonBreakRight] = useAtom(
    scratchesonBreakRightAtom
  );

  const [ballsMadeonBreakLeft, setBallsMadeonBreakLeft] = useAtom(
    ballsMadeonBreakLeftAtom
  );
  const [ballsMadeonBreakRight, setBallsMadeonBreakRight] = useAtom(
    ballsMadeonBreakRightAtom
  );

  const [shotAfterTheBreakLeft, setShotAfterTheBreakLeft] = useAtom(
    shotAfterTheBreakLeftAtom
  );

  const [shotAfterTheBreakRight, setShotAfterTheBreakRight] = useAtom(
    shotAfterTheBreakRightAtom
  );

  const [consecutiveBreakandRunsLeft, setConsecutiveBreakandRunsLeft] = useAtom(
    consecutiveBreakandRunsLeftAtom
  );

  const [consecutiveBreakandRunsRight, setConsecutiveBreakandRunsRight] =
    useAtom(consecutiveBreakandRunsRightAtom);

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
          leftNumber={scratchesonBreakLeft}
          rightNumber={scratchesonBreakRight}
          setLeftNumber={setScratchesonBreakleft}
          setRightNumber={setScratchesonBreakRight}
          boxTitle="Scratches on Break"
        />
        <PercentageRowbox
          leftNumber={ballsMadeonBreakLeft}
          rightNumber={ballsMadeonBreakRight}
          setLeftNumber={setBallsMadeonBreakLeft}
          setRightNumber={setBallsMadeonBreakRight}
          boxTitle="Ball Made on Break"
        />
        <PercentageRowbox
          leftNumber={shotAfterTheBreakLeft}
          rightNumber={shotAfterTheBreakRight}
          setLeftNumber={setShotAfterTheBreakLeft}
          setRightNumber={setShotAfterTheBreakRight}
          boxTitle="Shot After The Break"
        />
        <Rowbox leftNumber={0} rightNumber={0} boxTitle="Break and Run" />
        <PercentageRowbox
          leftNumber={consecutiveBreakandRunsLeft}
          rightNumber={consecutiveBreakandRunsRight}
          setLeftNumber={setConsecutiveBreakandRunsLeft}
          setRightNumber={setConsecutiveBreakandRunsRight}
          boxTitle="Consecutive Break and Runs"
        />
        <Rowbox
          leftNumber={winningStreakLeft}
          rightNumber={winningStreakRight}
          setLeftNumber={setWinningStreakLeft}
          setRightNumber={setWinningStreakRight}
          boxTitle="Longest Game Winning Streak"
        />
        <InGameStats />
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
