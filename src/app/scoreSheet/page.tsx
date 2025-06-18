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
} from "@/app/atom";
import { AccuStats } from "@/components/accuStat";
import { AccuStatWithMissSafety } from "@/components/accuStatWithMissSafety";
import { Rowbox } from "@/components/rowbox";
import { InGameStats } from "@/components/inGameStats";
import { Toprow } from "@/components/toprow";
import { PercentageRowbox } from "@/components/percentageRowbox";
import { useRouter } from "next/navigation";
import { useAtom, useAtomValue, useSetAtom } from "jotai";
import { sendStatsData, upDateStatsData } from "../supabase";

export default function ScoreSheet() {
  const saveNewStat = useAtomValue(statAtom);
  const [isEditing, setIsEditing] = useState(!saveNewStat.id);
  const router = useRouter();

  const handleBack = () => {
    router.push("/");
  };

  const handleSave = () => {
    if (saveNewStat.id) {
      // if (saveNewStat.id) はもし、idが存在する場合、という意味。データがあるので、IDがあるため。
      // idがある場合、下のように既存のデータを更新する
      upDateStatsData(saveNewStat);
    } else {
      sendStatsData(saveNewStat);
      // 無ければ新しいデータを送信する
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
          isEditing={isEditing}
        />
        <Rowbox
          boxTitle="Total Break"
          left={totalBreakLeftAtom}
          right={totalBreakRightAtom}
          isEditing={isEditing}
        />
        <PercentageRowbox
          boxTitle="Dry Breaks"
          left={dryBreaksLeftAtom}
          right={dryBreaksRightAtom}
          isEditing={isEditing}
        />
        <PercentageRowbox
          boxTitle="Scratches on Break"
          left={scratchesonBreakLeftAtom}
          right={scratchesonBreakRightAtom}
          isEditing={isEditing}
        />
        <PercentageRowbox
          boxTitle="Ball Made on Break"
          left={ballsMadeonBreakLeftAtom}
          right={ballsMadeonBreakRightAtom}
          isEditing={isEditing}
        />
        <PercentageRowbox
          left={shotAfterTheBreakLeftAtom}
          right={shotAfterTheBreakRightAtom}
          boxTitle="Shot After The Break"
          isEditing={isEditing}
        />
        <PercentageRowbox
          left={breakAndRunLeftAtom}
          right={breakAndRunRightAtom}
          boxTitle="Break and Run"
          isEditing={isEditing}
        />
        <PercentageRowbox
          left={consecutiveBreakandRunsLeftAtom}
          right={consecutiveBreakandRunsRightAtom}
          boxTitle="Consecutive Break and Runs"
          isEditing={isEditing}
        />
        <Rowbox
          boxTitle="Longest Game Winning Streak"
          left={winningStreakLeftAtom}
          right={winningStreakRightAtom}
          isEditing={isEditing}
        />
        <InGameStats />
        <Rowbox
          boxTitle="Balls Pocketed"
          left={ballsPocketedLeftAtom}
          right={ballsPocketedRightAtom}
          isEditing={isEditing}
        />
        <Rowbox
          boxTitle="Balls Missed"
          left={ballsMissedLeftAtom}
          right={ballsMissedRightAtom}
          isEditing={isEditing}
        />
        <Rowbox
          boxTitle="Balls Missed with safety"
          left={ballsMissedWithSafetyLeftAtom}
          right={ballsMissedWithSafetyRightAtom}
          isEditing={isEditing}
        />
        <Rowbox
          boxTitle="Unforced Errors"
          left={unforcedErrorsLeftAtom}
          right={unforcedErrorsRightAtom}
          isEditing={isEditing}
        />
        <Rowbox
          boxTitle="Safety Errors"
          left={safetyErrorsLeftAtom}
          right={safetyErrorsRightAtom}
          isEditing={isEditing}
        />
        <Rowbox
          boxTitle="Kicking Errors"
          left={kickingErrorsLeftAtom}
          right={kickingErrorsRightAtom}
          isEditing={isEditing}
        />
        <AccuStats />
        <AccuStatWithMissSafety />
      </div>
    </div>
  );
}
