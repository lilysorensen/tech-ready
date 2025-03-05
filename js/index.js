const supabaseUrl = "YOUR_SUPABASE_URL";
        const supabaseAnonKey = "YOUR_SUPABASE_ANON_KEY";
        const supabase = supabase.createClient(supabaseUrl, supabaseAnonKey);

        document.getElementById("google-login").addEventListener("click", async () => {
            const {
                data,
                error
            } = await supabase.auth.signInWithOAuth({
                provider: 'google'
            });
            if (error) {
                console.error("Error logging in:", error.message);
            }
        });