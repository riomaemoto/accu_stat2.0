"use client";

import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import {
  toggleAtom,
  totalBreakLeftAtom,
  totalBreakRightAtom,
} from "@/app/atom";

type Props = {
  boxTitle: string;
  left: PrimitiveAtom<number>;
  right: PrimitiveAtom<number>;
  readonlyScore: { left: number; right: number };
};

export const PercentageRowbox = ({
  boxTitle,
  left,
  right,
  readonlyScore,
}: Props) => {
  const [leftNumber, setLeftNumber] = useAtom(left);
  const [rightNumber, setRightNumber] = useAtom(right);
  const totalBreakLeftValue = useAtomValue(totalBreakLeftAtom);
  const totalBreakRightValue = useAtomValue(totalBreakRightAtom);
  const toggleValue = useAtomValue(toggleAtom);

  const percentageLeftValue = () => {
    const leftOutPut = Math.round((leftNumber / totalBreakLeftValue) * 100);
    if (!totalBreakLeftValue || totalBreakLeftValue === 0) {
      return 0;
    }
    return leftOutPut;
  };

  const percentageRightValue = () => {
    const rightOutPut = Math.round((rightNumber / totalBreakRightValue) * 100);
    if (!totalBreakRightValue || totalBreakRightValue === 0) {
      return 0;
    }
    return rightOutPut;
  };

  const incrementLeft = () => {
    if (setLeftNumber === undefined) return;
    setLeftNumber(leftNumber + 1);
  };
  const incrementRight = () => {
    if (setRightNumber === undefined) return;
    setRightNumber(rightNumber + 1);
  };

  const decrementLeft = () => {
    if (leftNumber > 0 && setLeftNumber !== undefined) {
      setLeftNumber(leftNumber - 1);
    }
  };

  const decrementRight = () => {
    if (rightNumber > 0 && setRightNumber !== undefined) {
      setRightNumber(rightNumber - 1);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-green-400 my-2"
            onClick={incrementLeft}
            disabled={!toggleValue}
          >
            +
          </button>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-red-300 my-2"
            onClick={decrementLeft}
            disabled={!toggleValue}
          >
            -
          </button>
        </div>

        <div>
          <div className="border border-solid w-[55px] md:w-[100px] h-[45px] flex items-center justify-center">
            {toggleValue ? leftNumber : readonlyScore.left}
          </div>
          <div className="border border-solid w-[55px] md:w-[100px] h-[45px] flex items-center justify-center">
            {percentageLeftValue() + "%"}
          </div>
        </div>

        <div className="border border-solid w-[140px] md:w-[250px] h-[90px] text-center flex items-center justify-center bg-sky-200 px-1">
          {boxTitle}
        </div>
        <div>
          <div className="border border-solid w-[55px] md:w-[100px] h-[45px] flex items-center justify-center">
            {toggleValue ? rightNumber : readonlyScore.right}
          </div>
          <div className="border border-solid w-[55px] md:w-[100px] h-[45px] flex items-center justify-center">
            {percentageRightValue() + "%"}
          </div>
        </div>

        <div>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-green-400 my-2"
            onClick={incrementRight}
            disabled={!toggleValue}
          >
            +
          </button>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-red-300 my-2"
            onClick={decrementRight}
            disabled={!toggleValue}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
