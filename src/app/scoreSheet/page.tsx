"use client";

import React, { useState } from "react";
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
  toggleAtom,
  readOnlyAtom,
} from "@/app/atom";
import { AccuStats } from "@/components/accuStat";
import { AccuStatWithMissSafety } from "@/components/accuStatWithMissSafety";
import { Rowbox } from "@/components/rowbox";
import { InGameStats } from "@/components/inGameStats";
import { Toprow } from "@/components/toprow";
import { PercentageRowbox } from "@/components/percentageRowbox";
import { useRouter } from "next/navigation";
import { useAtom, useAtomValue } from "jotai";
import { sendStatsData, upDateStats } from "../supabase";

export default function ScoreSheet() {
  const [isEditing, setIsEditing] = useAtom(toggleAtom);
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  const statAtomValue = useAtomValue(statAtom);

  const handleSave = () => {
    if (statAtomValue.id) {
      upDateStats(statAtomValue.id, statAtomValue);
    } else {
      sendStatsData(statAtomValue);
    }
  };

  const readonlyValue = useAtomValue(readOnlyAtom);

  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-[1400px] flex flex-col items-center justify-center p-5">
        <div className="w-full flex justify-start mb-4">
          <button
            onClick={handleBack}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Back
          </button>
        </div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <button
                onClick={() => setIsEditing(!isEditing)}
                className={`px-4 py-2 rounded ${
                  isEditing
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-700"
                } hover:bg-blue-500`}
              >
                {isEditing ? "Editing" : "ViewOnly"}
              </button>
            </div>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
              onClick={handleSave}
            >
              Save
            </button>
          </div>
        </div>

        <Toprow />
        <Rowbox
          boxTitle="Game Score"
          left={gameScoreLeftAtom}
          right={gameScoreRightAtom}
          readonly={readonlyValue.gameScore}
        />
        <Rowbox
          boxTitle="Total Break"
          left={totalBreakLeftAtom}
          right={totalBreakRightAtom}
          readonly={readonlyValue.totalBreak}
        />
        <PercentageRowbox
          boxTitle="Dry Breaks"
          left={dryBreaksLeftAtom}
          right={dryBreaksRightAtom}
          readonly={readonlyValue.dryBreaks}
        />
        <PercentageRowbox
          boxTitle="Scratches on Break"
          left={scratchesonBreakLeftAtom}
          right={scratchesonBreakRightAtom}
          readonly={readonlyValue.scratchesonBreak}
        />
        <PercentageRowbox
          boxTitle="Ball Made on Break"
          left={ballsMadeonBreakLeftAtom}
          right={ballsMadeonBreakRightAtom}
          readonly={readonlyValue.ballsMadeonBreak}
        />
        <PercentageRowbox
          boxTitle="Shot After The Break"
          left={shotAfterTheBreakLeftAtom}
          right={shotAfterTheBreakRightAtom}
          readonly={readonlyValue.shotAfterTheBreak}
        />
        <PercentageRowbox
          boxTitle="Break and Run"
          left={breakAndRunLeftAtom}
          right={breakAndRunRightAtom}
          readonly={readonlyValue.breakAndRun}
        />
        <PercentageRowbox
          boxTitle="Consecutive Break and Runs"
          left={consecutiveBreakandRunsLeftAtom}
          right={consecutiveBreakandRunsRightAtom}
          readonly={readonlyValue.consecutiveBreakandRuns}
        />
        <Rowbox
          boxTitle="Longest Game Winning Streak"
          left={winningStreakLeftAtom}
          right={winningStreakRightAtom}
          readonly={readonlyValue.winningStreak}
        />
        <InGameStats />
        <Rowbox
          boxTitle="Balls Pocketed"
          left={ballsPocketedLeftAtom}
          right={ballsPocketedRightAtom}
          readonly={readonlyValue.ballsPocketed}
        />
        <Rowbox
          boxTitle="Balls Missed"
          left={ballsMissedLeftAtom}
          right={ballsMissedRightAtom}
          readonly={readonlyValue.ballsMissed}
        />
        <Rowbox
          boxTitle="Balls Missed with safety"
          left={ballsMissedWithSafetyLeftAtom}
          right={ballsMissedWithSafetyRightAtom}
          readonly={readonlyValue.ballsMissedWithSafety}
        />
        <Rowbox
          boxTitle="Unforced Errors"
          left={unforcedErrorsLeftAtom}
          right={unforcedErrorsRightAtom}
          readonly={readonlyValue.unforcedErrors}
        />
        <Rowbox
          boxTitle="Safety Errors"
          left={safetyErrorsLeftAtom}
          right={safetyErrorsRightAtom}
          readonly={readonlyValue.safetyErrors}
        />
        <Rowbox
          boxTitle="Kicking Errors"
          left={kickingErrorsLeftAtom}
          right={kickingErrorsRightAtom}
          readonly={readonlyValue.kickingErrors}
        />
        <AccuStats />
        <AccuStatWithMissSafety />
      </div>
    </div>
  );
}
