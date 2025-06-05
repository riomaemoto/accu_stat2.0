"use client";

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
  breakAndRunLeftAtom,
  breakAndRunRightAtom,
  consecutiveBreakandRunsLeftAtom,
  consecutiveBreakandRunsRightAtom,
  statAtom,
  readonlyStatAtom,
  toggleAtom,
} from "@/app/atom";
import { AccuStats } from "@/components/accuStat";
import { AccuStatWithMissSafety } from "@/components/accuStatWithMissSafety";
import { Rowbox } from "@/components/rowbox";
import { InGameStats } from "@/components/inGameStats";
import { Toprow } from "@/components/toprow";
import { useRouter } from "next/navigation";
import { sendStats } from "../supabase";
import { useAtom, useAtomValue } from "jotai";
import { useState } from "react";

export default function Home1() {
  const aaa = useRouter();

  const atomValue = useAtomValue(statAtom);
  const [isToggled, setIsToggled] = useAtom(toggleAtom);
  const readValue = useAtomValue(readonlyStatAtom);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center p-5">
        <div className="flex justify-between w-full mt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            onClick={() => {
              console.log("readValue", readValue.totalBreak.left);
              return;
              aaa.push("/");
            }}
          >
            Back
          </button>
          <button
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
            onClick={() => sendStats(atomValue)}
          >
            Save
          </button>
        </div>
        <div className="flex justify-center w-full mt-4">
          <button
            className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
            onClick={() => setIsToggled(!isToggled)}
          >
            {isToggled ? "ON" : "OFF"}
          </button>
        </div>
        <Toprow />
        <Rowbox
          boxTitle="Game Score"
          left={gameScoreLeftAtom}
          right={gameScoreRightAtom}
          readonlyScore={readValue.gameScore}
        />
        <Rowbox
          boxTitle="Total Break"
          left={totalBreakLeftAtom}
          right={totalBreakRightAtom}
          readonlyScore={readValue.totalBreak}
        />
        <PercentageRowbox
          boxTitle="Dry Breaks"
          left={dryBreaksLeftAtom}
          right={dryBreaksRightAtom}
          readonlyScore={readValue.dryBreaks}
        />
        <PercentageRowbox
          boxTitle="Scratches on Break"
          left={scratchesonBreakLeftAtom}
          right={scratchesonBreakRightAtom}
          readonlyScore={readValue.scratchesonBreak}
        />
        <PercentageRowbox
          boxTitle="Ball Made on Break"
          left={ballsMadeonBreakLeftAtom}
          right={ballsMadeonBreakRightAtom}
          readonlyScore={readValue.ballsMadeonBreak}
        />
        <PercentageRowbox
          left={shotAfterTheBreakLeftAtom}
          right={shotAfterTheBreakRightAtom}
          readonlyScore={readValue.shotAfterTheBreak}
          boxTitle="Shot After The Break"
        />
        <PercentageRowbox
          left={breakAndRunLeftAtom}
          right={breakAndRunRightAtom}
          readonlyScore={readValue.breakAndRun}
          boxTitle="Break and Run"
        />
        <PercentageRowbox
          left={consecutiveBreakandRunsLeftAtom}
          right={consecutiveBreakandRunsRightAtom}
          readonlyScore={readValue.consecutiveBreakandRuns}
          boxTitle="Consecutive Break and Runs"
        />
        <Rowbox
          boxTitle="Longest Game Winning Streak"
          left={winningStreakLeftAtom}
          right={winningStreakRightAtom}
          readonlyScore={readValue.winningStreak}
        />
        <InGameStats />
        <Rowbox
          boxTitle="Balls Pocketed"
          left={ballsPocketedLeftAtom}
          right={ballsPocketedRightAtom}
          readonlyScore={readValue.ballsPocketed}
        />
        <Rowbox
          boxTitle="Balls Missed"
          left={ballsMissedLeftAtom}
          right={ballsMissedRightAtom}
          readonlyScore={readValue.ballsMissed}
        />
        <Rowbox
          boxTitle="Balls Missed with safety"
          left={ballsMissedWithSafetyLeftAtom}
          right={ballsMissedWithSafetyRightAtom}
          readonlyScore={readValue.ballsMissedWithSafety}
        />
        <Rowbox
          boxTitle="Unforced Errors"
          left={unforcedErrorsLeftAtom}
          right={unforcedErrorsRightAtom}
          readonlyScore={readValue.unforcedErrors}
        />
        <Rowbox
          boxTitle="Safety Errors"
          left={safetyErrorsLeftAtom}
          right={safetyErrorsRightAtom}
          readonlyScore={readValue.safetyErrors}
        />
        <Rowbox
          boxTitle="Kicking Errors"
          left={kickingErrorsLeftAtom}
          right={kickingErrorsRightAtom}
          readonlyScore={readValue.kickingErrors}
        />
        <AccuStats />
        <AccuStatWithMissSafety />
      </div>
    </div>
  );
}
