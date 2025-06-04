import { createClient } from "@supabase/supabase-js";
import { StatType } from "@/app/atom";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

const supabase = createClient(supabaseUrl, supabaseAnonKey);

export const insertStat = async (sendData: StatType) => {
  const query = supabase.from("statistics").insert(sendData).select("*");
  const { data, error } = await query;

  if (error || !data) return null;
  const res = data[0] as StatType;
  return res ? res : null;
};
