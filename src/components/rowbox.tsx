"use client";
import { RowboxProps } from "@/types";
import { useState } from "react";
export const Rowbox = ({ boxTitle }: RowboxProps) => {
  const [leftNumber, setLeftNumber] = useState(0);
  const [rightNumber, setRightNumber] = useState(0);
  const incrementLeft = () => {
    setLeftNumber(leftNumber + 1);
  };
  const incrementRight = () => {
    setRightNumber(rightNumber + 1);
  };
  const decreaseLeft = () => {
    if (leftNumber > 0) {
      setLeftNumber(leftNumber - 1);
    }
  };

  const decreaseRight = () => {
    if (rightNumber > 0) {
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
            onClick={decreaseLeft}
          >
            -
          </button>
        </div>

        <div className="border border-solid w-[100px] h-[90px] flex items-center justify-center">
          {leftNumber}
        </div>
        <div className="border border-solid w-[250px] h-[90px] text-center flex items-center justify-center bg-sky-200 px-1">
          {boxTitle}
        </div>

        <div className="border border-solid w-[100px] h-[90px] flex items-center justify-center">
          {rightNumber}
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
            onClick={decreaseRight}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
