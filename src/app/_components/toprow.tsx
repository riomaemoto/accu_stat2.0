export const Toprow = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] flex flex-row  items-center justify-center">
        <input
          className="w-[170px] md:w-[150px] h-[70px] border-[1px] border-solid text-center md:text-[14px]"
          placeholder="Enter your name here"
          type="text"
        />

        <div className="border border-solid w-[260px] md:w-[250px] h-[70px] flex items-center justify-center">
          Breaks
        </div>

        <input
          className="w-[170px] md:w-[150px] h-[70px] border-[1px] border-solid text-center md:text-[14px]"
          placeholder="Enter your name here"
          type="text"
        />
      </div>
    </div>
  );
};
