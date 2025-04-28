import Image from "next/image";
import { Toprow } from "./components/toprow";
import { Rowbox } from "./components/rowbox";

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-center bg-gray-100">
      <div className="w-full max-w-[1200px] flex flex-col items-center justify-center p-10 bg-green-200">
        <Toprow />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Game Score" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Total Break" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Dry Breaks" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Scratches on Break" />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Ball Made on Break" />
        <Rowbox
          leftNumber={1}
          rightNumber={2}
          boxTitle="Shot After The Break"
        />
        <Rowbox leftNumber={1} rightNumber={2} boxTitle="Break and Run" />
        <Rowbox
          leftNumber={1}
          rightNumber={2}
          boxTitle="Consecutive Break and Runs"
        />
        <Rowbox
          leftNumber={1}
          rightNumber={2}
          boxTitle="Longest Game Winning Streak"
        />
      </div>
    </div>
  );
}
