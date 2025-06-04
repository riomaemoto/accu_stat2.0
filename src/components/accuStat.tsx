import {
  ballsMissedLeftAtom,
  ballsMissedRightAtom,
  ballsPocketedLeftAtom,
  ballsPocketedRightAtom,
  kickingErrorsLeftAtom,
  kickingErrorsRightAtom,
  safetyErrorsLeftAtom,
  safetyErrorsRightAtom,
  unforcedErrorsLeftAtom,
  unforcedErrorsRightAtom,
} from "@/app/atom";
import { useAtomValue } from "jotai";

export const AccuStats = () => {
  const ballsMissedLeft = useAtomValue(ballsMissedLeftAtom);
  const ballsMissedRight = useAtomValue(ballsMissedRightAtom);
  const unforcedErrorsLeft = useAtomValue(unforcedErrorsLeftAtom);
  const unforcedErrorsRight = useAtomValue(unforcedErrorsRightAtom);
  const safetyErrorsLeft = useAtomValue(safetyErrorsLeftAtom);
  const safetyErrorsRight = useAtomValue(safetyErrorsRightAtom);
  const ballsPocketedLeft = useAtomValue(ballsPocketedLeftAtom);
  const ballsPocketedRight = useAtomValue(ballsPocketedRightAtom);
  const kickingErrorsLeft = useAtomValue(kickingErrorsLeftAtom);
  const kickingErrorsRight = useAtomValue(kickingErrorsRightAtom);

  const accuStatLeft =
    ballsPocketedLeft /
    (ballsPocketedLeft +
      ballsMissedLeft +
      unforcedErrorsLeft +
      safetyErrorsLeft +
      kickingErrorsLeft);

  const accuStatRight =
    ballsPocketedRight /
    (ballsPocketedRight +
      ballsMissedRight +
      unforcedErrorsRight +
      safetyErrorsRight +
      kickingErrorsRight);

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {isNaN(accuStatLeft) ? 0 : accuStatLeft.toFixed(3)}
        </div>
        <div className="border border-solid w-[250px] h-[80px] text-center flex items-center justify-center bg-sky-200">
          ACCU STAT
        </div>

        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {isNaN(accuStatRight) ? 0 : accuStatRight.toFixed(3)}
        </div>
      </div>
    </div>
  );
};
