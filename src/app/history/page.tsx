"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { fetchStatsData } from "../supabase";
import { readOnlyStatAtom, statAtom, StatType } from "../atom";
import { useSetAtom } from "jotai";

export default function History() {
  const router = useRouter();

  useEffect(() => {
    getHistoryStat();
  }, []);

  const getHistoryStat = async () => {
    const aaa = await fetchStatsData();
    setHistoryStat(aaa);
  };

  const handleViewStat = (id: number) => {
    router.push("/scoreSheet");
    const stat = historyStat.find((record) => record.id === id);
    setShowStat(stat!);
    setReadOnlyStat(stat!);
  };

  const handleBack = () => {
    router.push("/");
  };

  const setShowStat = useSetAtom(statAtom);
  const setReadOnlyStat = useSetAtom(readOnlyStatAtom);

  const [historyStat, setHistoryStat] = useState<StatType[]>([]);

  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-start mb-4">
        <button
          onClick={handleBack}
          className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Back
        </button>
      </div>
      <h1 className="text-2xl font-bold text-center mb-4">History Records</h1>
      <ul className="space-y-4">
        {historyStat.map((record, index) => (
          <li
            key={index}
            className="p-4 border rounded-lg shadow-md flex justify-between items-center bg-white hover:bg-gray-100 transition"
          >
            <div className="flex">
              <p className="text-lg font-medium">
                {record.player1} VS {record.player2}
              </p>
              <p className="text-sm text-gray-500 text-center ml-4 mt-1">
                Created: {record.created_at}
              </p>
              <p className="text-sm text-gray-500 text-center ml-4 mt-1">
                Updated: {record.updated_at}
              </p>
            </div>
            <button
              className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition cursor-pointer"
              onClick={() => handleViewStat(record.id!)}
            >
              View Stat
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}