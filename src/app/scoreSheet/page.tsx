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
} from "@/app/atom";
import { AccuStats } from "@/components/accuStat";
import { AccuStatWithMissSafety } from "@/components/accuStatWithMissSafety";
import { Rowbox } from "@/components/rowbox";
import { InGameStats } from "@/components/inGameStats";
import { Toprow } from "@/components/toprow";
import { PercentageRowbox } from "@/components/percentageRowbox";
import { useRouter } from "next/navigation";

export default function ScoreSheet() {
  const [isEditing, setIsEditing] = useState(false);
  const router = useRouter();

  const handleBack = () => {
    router.push("/"); // Navigate to the home page
  };

  const handleSave = () => {
    // Add save functionality here
    alert("Changes saved!");
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
            <div className="flex items-center">
              <span className="mr-2 text-gray-700">Edit</span>
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={isEditing}
                  onChange={() => setIsEditing(!isEditing)}
                  className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:bg-blue-600 after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:after:translate-x-full peer-checked:after:border-white"></div>
              </label>
            </div>
            <button
              onClick={handleSave}
              className="px-4 py-2 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save
            </button>
          </div>
        </div>

        {/* Existing content */}
        <Toprow />
        <Rowbox
          boxTitle="Game Score"
          left={gameScoreLeftAtom}
          right={gameScoreRightAtom}
        />
        <Rowbox
          boxTitle="Total Break"
          left={totalBreakLeftAtom}
          right={totalBreakRightAtom}
        />
        <PercentageRowbox
          boxTitle="Dry Breaks"
          left={dryBreaksLeftAtom}
          right={dryBreaksRightAtom}
        />
        <PercentageRowbox
          boxTitle="Scratches on Break"
          left={scratchesonBreakLeftAtom}
          right={scratchesonBreakRightAtom}
        />
        <PercentageRowbox
          boxTitle="Ball Made on Break"
          left={ballsMadeonBreakLeftAtom}
          right={ballsMadeonBreakRightAtom}
        />
        <PercentageRowbox
          left={shotAfterTheBreakLeftAtom}
          right={shotAfterTheBreakRightAtom}
          boxTitle="Shot After The Break"
        />
        <PercentageRowbox
          left={breakAndRunLeftAtom}
          right={breakAndRunRightAtom}
          boxTitle="Break and Run"
        />
        <PercentageRowbox
          left={consecutiveBreakandRunsLeftAtom}
          right={consecutiveBreakandRunsRightAtom}
          boxTitle="Consecutive Break and Runs"
        />
        <Rowbox
          boxTitle="Longest Game Winning Streak"
          left={winningStreakLeftAtom}
          right={winningStreakRightAtom}
        />
        <InGameStats />
        <Rowbox
          boxTitle="Balls Pocketed"
          left={ballsPocketedLeftAtom}
          right={ballsPocketedRightAtom}
        />
        <Rowbox
          boxTitle="Balls Missed"
          left={ballsMissedLeftAtom}
          right={ballsMissedRightAtom}
        />
        <Rowbox
          boxTitle="Balls Missed with safety"
          left={ballsMissedWithSafetyLeftAtom}
          right={ballsMissedWithSafetyRightAtom}
        />
        <Rowbox
          boxTitle="Unforced Errors"
          left={unforcedErrorsLeftAtom}
          right={unforcedErrorsRightAtom}
        />
        <Rowbox
          boxTitle="Safety Errors"
          left={safetyErrorsLeftAtom}
          right={safetyErrorsRightAtom}
        />
        <Rowbox
          boxTitle="Kicking Errors"
          left={kickingErrorsLeftAtom}
          right={kickingErrorsRightAtom}
        />
        <AccuStats />
        <AccuStatWithMissSafety />
      </div>
    </div>
  );
}
