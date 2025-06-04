export const Toprow = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] flex flex-row  items-center justify-center">
        <input
          className="w-[140px] md:w-[150px] h-[70px] border-[1px] border-solid text-center text-[14px] md:text-[16px]"
          placeholder="Enter Name here"
          type="text"
        />

        <div className="border border-solid w-[260px] md:w-[250px] h-[70px] flex items-center justify-center bg-sky-200">
          Breaks
        </div>

        <input
          className="w-[140px] md:w-[150px] h-[70px] border-[1px] border-solid text-center text-[14px] md:text-[16px]"
          placeholder="Enter Name here"
          type="text"
        />
      </div>
    </div>
  );
};
