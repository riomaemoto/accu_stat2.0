export const Toprow = () => {
  return (
    <div className="w-full">
      <div className="w-full max-w-[1200px] flex flex-row  items-center justify-center">
        <input
          className="w-[180px] h-[70px] border-[1px] border-solid text-center"
          placeholder="Enter your name here"
          type="text"
        />

        <div className="border border-solid w-[70px] h-[70px] flex items-center justify-center">
          First
          <br />
          Breaks
        </div>
        <div className="border border-solid w-[250px] h-[70px] flex items-center justify-center">
          Breaks
        </div>

        <div className="border border-solid w-[70px] h-[70px] flex items-center justify-center">
          Odd
          <br />
          Breaks
        </div>
        <input
          className="w-[180px] h-[70px] border-[1px] border-solid text-center"
          placeholder="Enter your name here"
          type="text"
        />
      </div>
    </div>
  );
};
