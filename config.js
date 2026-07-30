import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://lxqqjxddojvewtbaqodw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRwanpod2drbmh4cmp1Y2RodGNlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUyNDA5NjAsImV4cCI6MjEwMDgxNjk2MH0.Oj1zc2lPbz9AfYxH2tML_eY0CG5_pwqdVQRPwNm_sgc";

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
