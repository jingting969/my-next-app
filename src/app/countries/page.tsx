import { getSupabaseClient } from "@/lib/db";

export const runtime = "edge";

export default async function Countries() {
  const supabase = getSupabaseClient();
  const { data: countries } = await supabase.from("countries").select();

  return <pre>{JSON.stringify(countries, null, 2)}</pre>
}