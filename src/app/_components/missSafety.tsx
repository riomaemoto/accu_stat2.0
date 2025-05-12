import { RowboxProps } from "@/app/types";

export const MissSafety = ({
  leftNumber,
  rightNumber,
  boxTitle,
}: RowboxProps) => {
  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {leftNumber}
        </div>
        <div className="border border-solid w-[250px] h-[80px] text-center flex items-center justify-center bg-sky-200">
          {boxTitle}
        </div>

        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {rightNumber}
        </div>
      </div>
    </div>
  );
};
