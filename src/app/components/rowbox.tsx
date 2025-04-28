type RowboxProps = {
  leftNumber: number;
  rightNumber: number;
  boxTitle: string;
};

export const Rowbox = ({ leftNumber, rightNumber, boxTitle }: RowboxProps) => {
  return (
    <div className="flex">
      <button className="border border-solid w-[90px] h-[70px] flex items-center justify-center">
        -
      </button>
      <button className="border border-solid w-[90px] h-[70px] flex items-center justify-center">
        +
      </button>

      <div className="border border-solid w-[70px] h-[70px] flex items-center justify-center">
        {leftNumber}
      </div>
      <div className="border border-solid w-[250px] h-[70px] flex items-center justify-center">
        {boxTitle}
      </div>

      <div className="border border-solid w-[70px] h-[70px] flex items-center justify-center">
        {rightNumber}
      </div>
      <button className="border border-solid w-[90px] h-[70px] flex items-center justify-center">
        -
      </button>
      <button className="border border-solid w-[90px] h-[70px] flex items-center justify-center">
        +
      </button>
    </div>
  );
};
