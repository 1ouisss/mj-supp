// This file is automatically generated. Do not edit it directly.
import { createClient } from '@supabase/supabase-js';
import type { Database } from './types';

const SUPABASE_URL = "https://pdtzbvhdbtobkdemmepb.supabase.co";
const SUPABASE_PUBLISHABLE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBkdHpidmhkYnRvYmtkZW1tZXBiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3NTQ4MjMsImV4cCI6MjA1NDMzMDgyM30.vRLTtBmfZBmDQZV4Wf1m0En6OaPevJjS3YNgL3shVgA";

// Import the supabase client like this:
// import { supabase } from "@/integrations/supabase/client";

export const supabase = createClient<Database>(SUPABASE_URL, SUPABASE_PUBLISHABLE_KEY);