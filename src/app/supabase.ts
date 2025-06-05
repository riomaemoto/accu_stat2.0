import { createClient } from "@supabase/supabase-js";
import { StatType } from "@/app/atom";
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseKey);

export const sendStats = async (sendData: StatType) => {
  await supabase.from("stats_list").insert(sendData);
};

export const getStats = async () => {
  const { data } = await supabase.from("stats_list").select("*");
  return data as StatType[];
};
