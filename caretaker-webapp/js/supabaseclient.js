// supabaseclient.js
import 'dotenv/config';

import  {
    createClient
} from "https://esm.sh/@supabase/supabase-js";

const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const databaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;

const supabase = createClient(
    databaseUrl,
    supabaseKey
);


export { supabase };