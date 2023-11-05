import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://eshhlezdipmgmfqoaxvm.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVzaGhsZXpkaXBtZ21mcW9heHZtIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgzMzQxMTYsImV4cCI6MjAxMzkxMDExNn0.G_BkrjKVIHDSyCNbBQINaXeswir822FiloqrX8gzLNs";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
