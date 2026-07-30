import { createClient } from "https://esm.sh/@supabase/supabase-js@2";

const supabaseUrl = "https://lxqqjxddojvewtbaqodw.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx4cXFqeGRkb2p2ZXd0YmFxb2R3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODUzODY5MTAsImV4cCI6MjEwMDk2MjkxMH0.P1TsnQ3HHfICHBZSSS2L7YXornEWji81yadvKBBMroQ";

export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
);
