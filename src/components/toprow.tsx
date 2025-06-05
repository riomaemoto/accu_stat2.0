import { player1Atom, player2Atom } from "@/app/atom";
import { useAtom } from "jotai";

export const Toprow = () => {
  const [player1, setPlayer1] = useAtom(player1Atom);
  const [player2, setPlayer2] = useAtom(player2Atom);

  return (
    <div className="w-full">
      <div className="w-full max-w-[1400px] flex flex-row  items-center justify-center">
        <input
          className="w-[140px] md:w-[150px] h-[70px] border-[1px] border-solid text-center text-[14px] md:text-[16px]"
          placeholder="Enter Name here"
          type="text"
          onChange={(e) => setPlayer1(e.target.value)}
          value={player1}
        />

        <div className="border border-solid w-[260px] md:w-[250px] h-[70px] flex items-center justify-center bg-sky-200">
          Breaks
        </div>

        <input
          className="w-[140px] md:w-[150px] h-[70px] border-[1px] border-solid text-center text-[14px] md:text-[16px]"
          placeholder="Enter Name here"
          type="text"
          onChange={(e) => setPlayer2(e.target.value)}
          value={player2}
        />
      </div>
    </div>
  );
};
