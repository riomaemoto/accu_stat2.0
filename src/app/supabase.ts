import { createClient } from "@supabase/supabase-js";
import { StatType } from "./atom";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchStatsData = async () => {
  const { data } = await supabase.from("stats_list").select("*");
  return data as StatType[];
};

export const sendStatsData = async (data: StatType) => {
  await supabase.from("stats_list").insert(data);
};
