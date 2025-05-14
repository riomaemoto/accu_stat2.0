import { RowboxProps } from "@/app/types";
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
} from "../atom";
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
    (ballsMissedLeft +
      unforcedErrorsLeft +
      safetyErrorsLeft +
      kickingErrorsLeft) /
      ballsPocketedLeft -
    1;

  const accuStatLeftValue = Math.max(0, Math.round(accuStatLeft * 100));

  const accuStatRight =
    (ballsMissedRight +
      unforcedErrorsRight +
      safetyErrorsRight +
      kickingErrorsRight) /
      ballsPocketedRight -
    1;
  const accuStatRightValue = Math.max(0, Math.round(accuStatRight * 100));

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {isNaN(accuStatLeftValue) ? "N/A" : accuStatLeftValue}
        </div>
        <div className="border border-solid w-[250px] h-[80px] text-center flex items-center justify-center bg-sky-200">
          ACCU STAT
        </div>

        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {isNaN(accuStatRightValue) ? "N/A" : accuStatRightValue}
        </div>
      </div>
    </div>
  );
};
