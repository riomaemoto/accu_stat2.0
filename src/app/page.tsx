import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-gray-100">
      <div className="flex">
        <input
          className="w-200px h-20px border border-gray-300 text-center"
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
          className="w-200px h-20px border border-gray-300 text-center"
          placeholder="Enter your name here"
          type="text"
        />
      </div>
    </div>
  );
}
