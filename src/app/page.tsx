"use client";

import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import { getStats } from "./supabase";
import { useSetAtom } from "jotai";
import { initialStat, readonlyStatAtom, statAtom, StatType } from "./atom";

export default function Home() {
  useEffect(() => {
    getaaa();
  }, []);

  const getaaa = async () => {
    const stats = await getStats();
    setData(stats);
  };

  const [data, setData] = useState<StatType[]>([]);

  const aaa = useRouter();

  const handleChangeStat = (id: number) => {
    aaa.push("/scoreSheet");
    const fuck = data.find((item) => item.id === id);
    setShowStats(fuck!);
    setRead(fuck!);
  };

  const setRead = useSetAtom(readonlyStatAtom);

  const setShowStats = useSetAtom(statAtom);

  const handleClear = () => {
    aaa.push("/scoreSheet");
    setShowStats(initialStat);
    setRead(initialStat);
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Player Stats</h1>
      <button
        className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        onClick={handleClear}
      >
        newStats
      </button>
      <ul className="space-y-4">
        {data.map((x, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center bg-white hover:bg-gray-100 transition"
          >
            <div className="flex flex-col md:flex-row md:items-center md:space-x-4">
              <p className="text-lg font-medium">Player 1: {x.player1}</p>
              <p className="text-lg font-medium">Player 2: {x.player2}</p>
              <p className="text-sm text-gray-500">Created: {x.created_at}</p>
              <p className="text-sm text-gray-500">Updated: {x.updated_at}</p>
            </div>
            <button
              className="mt-4 md:mt-0 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
              onClick={() => handleChangeStat(x.id!)}
            >
              View Stat
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
