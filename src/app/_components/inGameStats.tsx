import { RowboxProps } from "@/types";

export const InGameStats = ({
  leftNumber,
  rightNumber,
  inGameStats,
}: RowboxProps) => {
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
          {inGameStats}
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
