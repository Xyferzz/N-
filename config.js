import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "MASUKKAN_SUPABASE_URL";
const supabaseAnonKey = "MASUKKAN_SUPABASE_ANON_KEY";

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
