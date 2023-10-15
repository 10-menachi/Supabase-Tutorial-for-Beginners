import { createClient } from "@supabase/supabase-js";

const supaUrl = process.env.REACT_APP_SUPA_URL;
const supaAnonKey = process.env.REACT_APP_SUPA_ANON_KEY;

const supaClient = createClient(supaUrl, supaAnonKey);
export default supaClient