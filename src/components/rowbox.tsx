"use client";
import { PrimitiveAtom, useAtom, useAtomValue } from "jotai";
import { toggleAtom } from "@/app/atom";

type Props = {
  boxTitle: string;
  left: PrimitiveAtom<number>;
  right: PrimitiveAtom<number>;
};

export const Rowbox = ({ boxTitle, left, right }: Props) => {
  const [leftNumber, setLeftNumber] = useAtom(left);
  const [rightNumber, setRightNumber] = useAtom(right);
  const isEditing = useAtomValue(toggleAtom);

  const incrementLeft = () => {
    if (setLeftNumber === undefined) return;
    setLeftNumber(leftNumber + 1);
  };

  const decreaseLeft = () => {
    if (leftNumber > 0 && setLeftNumber !== undefined) {
      setLeftNumber(leftNumber - 1);
    }
  };

  const incrementRight = () => {
    if (!setRightNumber) return;
    setRightNumber(rightNumber + 1);
  };
  const decreaseRight = () => {
    if (rightNumber > 0 && setRightNumber) {
      setRightNumber(rightNumber - 1);
    }
  };

  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
              isEditing
                ? "bg-green-400 hover:bg-green-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={incrementLeft}
            disabled={!isEditing}
          >
            +
          </button>
          <button
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
              isEditing
                ? "bg-red-300 hover:bg-red-400"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={decreaseLeft}
            disabled={!isEditing}
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
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
              isEditing
                ? "bg-green-400 hover:bg-green-500"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={incrementRight}
            disabled={!isEditing}
          >
            +
          </button>
          <button
            className={`border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center my-2 ${
              isEditing
                ? "bg-red-300 hover:bg-red-400"
                : "bg-gray-300 cursor-not-allowed"
            }`}
            onClick={decreaseRight}
            disabled={!isEditing}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
};
