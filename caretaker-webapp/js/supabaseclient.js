require('dotenv').config();
const {
    createClient
} = requrie('@supabase/supabase.js');

const supabase = createClient(
    process.env.SUPABASE_URL,
    process.env.SUPABASE_SERVICE_ROLE_KEY
);

module.exports = supabase;