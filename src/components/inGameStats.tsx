import {
  gameScoreLeftAtom,
  gameScoreRightAtom,
  ballsPocketedLeftAtom,
  ballsPocketedRightAtom,
} from "@/app/atom";
import { useAtomValue } from "jotai";

export const InGameStats = () => {
  const gameScoreLeftValue = useAtomValue(gameScoreLeftAtom);
  const gameScoreRightValue = useAtomValue(gameScoreRightAtom);
  const inGameStatsLeft = gameScoreLeftValue * 9;
  const inGameStatsRight = gameScoreRightValue * 9;
  const totalInGameStats = inGameStatsLeft + inGameStatsRight;
  const ballsPocketedLeftValue = useAtomValue(ballsPocketedLeftAtom);
  const ballsPocketedRightValue = useAtomValue(ballsPocketedRightAtom);
  const inGameStatsValue =
    totalInGameStats - ballsPocketedLeftValue - ballsPocketedRightValue;

  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] flex flex-row  items-center justify-center">
        <div className="w-full max-w-[1400px] flex justify-center items-center">
          <div className="w-full max-w-[550px] h-[70px] border-[1px] border-solid flex justify-center items-center bg-sky-200">
            In Game Stats
          </div>
        </div>
      </div>
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-sky-200"></button>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-sky-200"></button>
        </div>

        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {inGameStatsValue}
        </div>
        <div className="border border-solid w-[250px] h-[80px] text-center flex items-center justify-center">
          {totalInGameStats}
        </div>

        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {inGameStatsValue}
        </div>
        <div>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-sky-200"></button>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-sky-200"></button>
        </div>
      </div>
    </div>
  );
};
