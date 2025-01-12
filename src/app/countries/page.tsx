import { createServerClient } from '../../lib/supabaseClient';

export default async function Countries() {
  const supabase = createServerClient();
  const { data: countries } = await supabase.from("countries").select();

  return <pre>{JSON.stringify(countries, null, 2)}</pre>
}