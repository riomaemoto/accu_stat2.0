"use client";
import { RowboxProps } from "@/types";
import { useRecoilState } from "recoil";

export const PercentageRowbox = ({
  leftNumber,
  leftPercentage,
  rightNumber,
  rightPercentage,
  boxTitle,
}: RowboxProps) => {
  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-green-400 my-2"
            // onClick={leftPlus}
          >
            +
          </button>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-red-300 my-2"
            // onClick={leftMinus}
          >
            -
          </button>
        </div>

        <div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {/* {leftValue} */}
          </div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {leftPercentage}
          </div>
        </div>

        <div className="border border-solid w-[140px] md:w-[250px] h-[90px] text-center flex items-center justify-center bg-sky-200 px-1">
          {boxTitle}
        </div>
        <div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {/* {rightValue} */}
          </div>
          <div className="border border-solid w-[50px] md:w-[100px] h-[45px] flex items-center justify-center">
            {rightPercentage}
          </div>
        </div>

        <div>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-green-400 my-2"
            // onClick={rightPlus}
          >
            +
          </button>
          <button
            className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center bg-red-300 my-2"
            // onClick={rightMinus}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
