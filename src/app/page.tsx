"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { getSupabase } from "./supabase";
import { initialStat, statAtom, StatType } from "./atom";
import { useAtom } from "jotai";

export default function Home() {
  useEffect(() => {
    const fetchData = async () => {
      const aaa = await getSupabase();
      setStatValue(aaa || []);
    };
    fetchData();
  }, []);

  const [statValue, setStatValue] = useState<StatType[]>([]);

  const [aaa, setAaa] = useAtom(statAtom);

  const handleMove = (id: number) => {
    router.push("/scoreSheet");
    const ccc = statValue.find((xx) => xx.id === id);
    setAaa(ccc!);
  };

  const router = useRouter();

  const handleNewStat = () => {
    router.push("/scoreSheet");
    setAaa(initialStat);
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center p-4">
      <h1 className="text-2xl font-bold mb-6">Player Match List</h1>
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
        onClick={handleNewStat}
      >
        NewStat
      </button>
      <div className="w-full max-w-[800px] bg-white shadow-md rounded-lg overflow-hidden">
        {statValue.map((item, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row items-center justify-between p-4 border-b last:border-b-0 hover:bg-gray-50"
          >
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4">
              <p className="text-lg font-medium">{item.player1}</p>
              <p className="text-lg font-medium">vs</p>
              <p className="text-lg font-medium">{item.player2}</p>
            </div>
            <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 mt-2 sm:mt-0">
              <p className="text-sm text-gray-500">
                Created: {item.created_at || "N/A"}
              </p>
              <p className="text-sm text-gray-500">
                Updated: {item.updated_at || "N/A"}
              </p>
            </div>
            <button
              onClick={() => handleMove(item.id!)}
              className="mt-2 sm:mt-0 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Stat
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
