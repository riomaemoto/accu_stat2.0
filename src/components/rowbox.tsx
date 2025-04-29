import { RowboxProps } from "@/types";

export const Rowbox = ({ leftNumber, rightNumber, boxTitle }: RowboxProps) => {
  return (
    <div className="w-full flex">
      <div className="w-full max-w-[1400px] flex flex-row items-center justify-center">
        <div>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center">
            +
          </button>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center">
            -
          </button>
        </div>

        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {leftNumber}
        </div>
        <div className="border border-solid w-[250px] h-[80px] text-center flex items-center justify-center">
          {boxTitle}
        </div>

        <div className="border border-solid w-[100px] h-[80px] flex items-center justify-center">
          {rightNumber}
        </div>
        <div>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center">
            +
          </button>
          <button className="border border-solid w-[50px] h-[40px] md:h-[40px] flex items-center justify-center">
            -
          </button>
        </div>
      </div>
    </div>
  );
};
