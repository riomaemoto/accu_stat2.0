import { createClient } from "@supabase/supabase-js";
import { StatType } from "@/app/atom";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const sendSupabase = async (sendData: StatType) => {
  await supabase.from("stats_list").insert(sendData);
};

export const getSupabase = async () => {
  const { data } = await supabase
    .from("stats_list")
    .select("*")
    .order("id", { ascending: true });
  return data ? (data as StatType[]) : null;
};
