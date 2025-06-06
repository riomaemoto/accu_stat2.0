import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!;
const supabase = createClient(supabaseUrl, supabaseKey);

export const fetchStatsData = async (stat_list: string) => {
  const { data } = await supabase.from("stat_list").select("*");

  return data;
};

export const sendStatsData = async (stat_list: string) => {
  await supabase.from("stat_list").insert([{ stat_list }]);
};
