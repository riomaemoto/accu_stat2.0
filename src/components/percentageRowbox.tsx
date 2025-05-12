"use client";

import { RowboxProps } from "@/app/types";
import { useAtom } from "jotai";
import { totalBreakLeftAtom, totalBreakRightAtom } from "@/app/atom";

export const PercentageRowbox = ({
  leftNumber,
  rightNumber,
  boxTitle,
  setLeftNumber,
  setRightNumber,
}: RowboxProps) => {
  // atom の値を取得するには[]を使う必要がある。[]がない、const totalBreakLeftValue = useAtom(totalBreakLeftAtom);は同じ物を変数に入れてるだけになる。

  const [totalBreakLeftValue] = useAtom(totalBreakLeftAtom);
  const [totalBreakRightValue] = useAtom(totalBreakRightAtom);

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
          >
            +
          </button>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-red-300 my-2"
            onClick={decrementLeft}
          >
            -
          </button>
        </div>

        <div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {leftNumber}
          </div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {percentageLeftValue() + "%"}
          </div>
        </div>

        <div className="border border-solid w-[140px] md:w-[250px] h-[90px] text-center flex items-center justify-center bg-sky-200 px-1">
          {boxTitle}
        </div>
        <div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {rightNumber}
          </div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {percentageRightValue() + "%"}
          </div>
        </div>

        <div>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-green-400 my-2"
            onClick={incrementRight}
          >
            +
          </button>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-red-300 my-2"
            onClick={decrementRight}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
