"use client";

import React, { useEffect } from "react";
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
  readOnlyStatAtom,
} from "@/app/atom";
import { AccuStats } from "@/components/accuStat";
import { AccuStatWithMissSafety } from "@/components/accuStatWithMissSafety";
import { Rowbox } from "@/components/rowbox";
import { InGameStats } from "@/components/inGameStats";
import { Toprow } from "@/components/toprow";
import { PercentageRowbox } from "@/components/percentageRowbox";
import { useRouter } from "next/navigation";
import { useAtom, useAtomValue } from "jotai";
import { sendStatsData, upDateStatsData } from "../supabase";

export default function ScoreSheet() {
  const saveNewStat = useAtomValue(statAtom);
  const [isEditing, setIsEditing] = useAtom(toggleAtom);
  const router = useRouter();
  const readOnlyValue = useAtomValue(readOnlyStatAtom);

  const isViewingExistingStat = saveNewStat.id;

  useEffect(() => {
    if (isViewingExistingStat) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  }, [saveNewStat.id, setIsEditing]);

  const handleBack = () => {
    router.push("/");
  };

  const handleSave = () => {
    if (saveNewStat.id) {
      upDateStatsData(saveNewStat);
    } else {
      sendStatsData(saveNewStat);
    }
  };

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
            <button
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
              onClick={() => setIsEditing(!isEditing)}
            >
              {isEditing ? "Editing" : "Read Only"}
            </button>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
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
          readOnly={readOnlyValue.gameScore}
        />
        <Rowbox
          boxTitle="Total Break"
          left={totalBreakLeftAtom}
          right={totalBreakRightAtom}
          readOnly={readOnlyValue.totalBreak}
        />
        <PercentageRowbox
          boxTitle="Dry Breaks"
          left={dryBreaksLeftAtom}
          right={dryBreaksRightAtom}
          readOnly={readOnlyValue.dryBreaks}
        />
        <PercentageRowbox
          boxTitle="Scratches on Break"
          left={scratchesonBreakLeftAtom}
          right={scratchesonBreakRightAtom}
          readOnly={readOnlyValue.scratchesonBreak}
        />
        <PercentageRowbox
          boxTitle="Ball Made on Break"
          left={ballsMadeonBreakLeftAtom}
          right={ballsMadeonBreakRightAtom}
          readOnly={readOnlyValue.ballsMadeonBreak}
        />
        <PercentageRowbox
          boxTitle="Shot After The Break"
          left={shotAfterTheBreakLeftAtom}
          right={shotAfterTheBreakRightAtom}
          readOnly={readOnlyValue.shotAfterTheBreak}
        />
        <PercentageRowbox
          boxTitle="Break and Run"
          left={breakAndRunLeftAtom}
          right={breakAndRunRightAtom}
          readOnly={readOnlyValue.breakAndRun}
        />
        <PercentageRowbox
          boxTitle="Consecutive Break and Runs"
          left={consecutiveBreakandRunsLeftAtom}
          right={consecutiveBreakandRunsRightAtom}
          readOnly={readOnlyValue.consecutiveBreakandRuns}
        />
        <Rowbox
          boxTitle="Longest Game Winning Streak"
          left={winningStreakLeftAtom}
          right={winningStreakRightAtom}
          readOnly={readOnlyValue.winningStreak}
        />
        <InGameStats />
        <Rowbox
          boxTitle="Balls Pocketed"
          left={ballsPocketedLeftAtom}
          right={ballsPocketedRightAtom}
          readOnly={readOnlyValue.ballsPocketed}
        />
        <Rowbox
          boxTitle="Balls Missed"
          left={ballsMissedLeftAtom}
          right={ballsMissedRightAtom}
          readOnly={readOnlyValue.ballsMissed}
        />
        <Rowbox
          boxTitle="Balls Missed with safety"
          left={ballsMissedWithSafetyLeftAtom}
          right={ballsMissedWithSafetyRightAtom}
          readOnly={readOnlyValue.ballsMissedWithSafety}
        />
        <Rowbox
          boxTitle="Unforced Errors"
          left={unforcedErrorsLeftAtom}
          right={unforcedErrorsRightAtom}
          readOnly={readOnlyValue.unforcedErrors}
        />
        <Rowbox
          boxTitle="Safety Errors"
          left={safetyErrorsLeftAtom}
          right={safetyErrorsRightAtom}
          readOnly={readOnlyValue.safetyErrors}
        />
        <Rowbox
          boxTitle="Kicking Errors"
          left={kickingErrorsLeftAtom}
          right={kickingErrorsRightAtom}
          readOnly={readOnlyValue.kickingErrors}
        />
        <AccuStats />
        <AccuStatWithMissSafety />
      </div>
    </div>
  );
}
