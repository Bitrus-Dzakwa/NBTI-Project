

import { createClient } from "@supabase/supabase-js";


// Create a single supabase client for interacting with your database
const supabase = createClient(Deno.env.get('SUPABASE_URL'), Deno.env.get('SUPABASE_ANON_KEY'), {
    global: {
      headers: {
        'x-nbti-func-key': Deno.env.get('CHECKOUT_TABLE_AUTH_KEY') || "",
      }
    }
  });

  export default supabase;