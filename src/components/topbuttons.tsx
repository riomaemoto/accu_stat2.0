"use client";
import { statAtom } from "@/app/atom";
import { sendSupabase } from "@/app/supabase";
import { useAtomValue } from "jotai";
import { useRouter } from "next/navigation";

export const TopButtons = () => {
  const statValue = useAtomValue(statAtom);

  const router = useRouter();

  return (
    <div className="flex space-x-4 mb-6">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-all"
        onClick={() => router.push("/")}
      >
        Back
      </button>
      <button
        className="px-4 py-2 bg-green-500 text-white rounded-lg shadow-md hover:bg-green-600 transition-all"
        onClick={() => sendSupabase(statValue)}
      >
        Save
      </button>

      <div className="flex items-center mb-6">
        <label className="relative inline-flex items-center cursor-pointer">
          <input type="checkbox" className="sr-only peer" />
          <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-checked:bg-blue-500 transition-all"></div>
          <div className="absolute left-1 top-1 w-4 h-4 bg-white rounded-full peer-checked:translate-x-5 transition-transform"></div>
        </label>
      </div>
    </div>
  );
};
