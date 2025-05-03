"use client";

import { atom } from "recoil";

export const GameScoreleft = atom<number>({
  key: "GameScoreleft",
  default: 0,
});

export const GameScoreright = atom<number>({
  key: "GameScoreright",
  default: 0,
});

export const totalBreakleft = atom<number>({
  key: "totalBreakleft",
  default: 0,
});

export const totalBreakright = atom<number>({
  key: "totalBreakright",
  default: 0,
});

export const dryBreaksleft = atom<number>({
  key: "dryBreaksleft",
  default: 0,
});
export const dryBreaksright = atom<number>({
  key: "dryBreaksright",
  default: 0,
});
export const scratchesOnBreakleft = atom<number>({
  key: "scratchesOnBreakleft",
  default: 0,
});
export const scratchesOnBreakright = atom<number>({
  key: "scratchesOnBreakright",
  default: 0,
});

export const ballMadeOnBreakleft = atom<number>({
  key: "ballMadeOnBreakleft",
  default: 0,
});
export const ballMadeOnBreakright = atom<number>({
  key: "ballMadeOnBreakright",
  default: 0,
});
export const shotAfterTheBreakleft = atom<number>({
  key: "shotAfterTheBreakleft",
  default: 0,
});
export const shotAfterTheBreakright = atom<number>({
  key: "shotAfterTheBreakright",
  default: 0,
});
export const breakAndRunleft = atom<number>({
  key: "breakAndRunleft",
  default: 0,
});
export const breakAndRunright = atom<number>({
  key: "breakAndRunright",
  default: 0,
});
export const consecutiveBreakAndRunleft = atom<number>({
  key: "consecutiveBreakAndRunleft",
  default: 0,
});
export const consecutiveBreakAndRunright = atom<number>({
  key: "consecutiveBreakAndRunright",
  default: 0,
});
export const longestGameWinningStreakleft = atom<number>({
  key: "longestGameWinningStreakleft",
  default: 0,
});
export const longestGameWinningStreakright = atom<number>({
  key: "longestGameWinningStreakright",
  default: 0,
});
export const inGameStatsleft = atom<number>({
  key: "inGameStatsleft",
  default: 0,
});
export const inGameStatsright = atom<number>({
  key: "inGameStatsright",
  default: 0,
});
export const ballsPocketedleft = atom<number>({
  key: "ballsPocketedleft",
  default: 0,
});
export const ballsPocketedright = atom<number>({
  key: "ballsPocketedright",
  default: 0,
});
export const ballsMissedleft = atom<number>({
  key: "ballsMissedleft",
  default: 0,
});
export const ballsMissedright = atom<number>({
  key: "ballsMissedright",
  default: 0,
});

export const ballsMissedwithSafetyleft = atom<number>({
  key: "ballsMissedwithSafetyleft",
  default: 0,
});
export const ballsMissedwithSafetyright = atom<number>({
  key: "ballsMissedwithSafetyright",
  default: 0,
});

export const unforcedErrorsleft = atom<number>({
  key: "unforcedErrorsleft",
  default: 0,
});
export const unforcedErrorsright = atom<number>({
  key: "unforcedErrorsright",
  default: 0,
});
export const safetyErrorsleft = atom<number>({
  key: "safetyErrorsLeft",
  default: 0,
});
export const safetyErrorsright = atom<number>({
  key: "safetyErrorsRight",
  default: 0,
});
export const kickingErrorsleft = atom<number>({
  key: "kickingErrorsLeft",
  default: 0,
});
export const kickingErrorsright = atom<number>({
  key: "kickingErrorsRight",
  default: 0,
});

export const AccuStatsleft = atom<number>({
  key: "AccuStatsLeft",
  default: 0,
});
export const AccuStatsright = atom<number>({
  key: "AccuStatsRight",
  default: 0,
});

export const accustatwithMissSafetyleft = atom<number>({
  key: "accustatwithMissSafetyleft",
  default: 0,
});
export const accustatwithMissSafetyright = atom<number>({
  key: "accustatwithMissSafetyright",
  default: 0,
});
