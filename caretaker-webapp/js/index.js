const supabaseUrl = "https://wxgpdbzpmxphwubxyqou.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind4Z3BkYnpwbXhwaHd1Ynh5cW91Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzg3MTc2NzEsImV4cCI6MjA1NDI5MzY3MX0.ZgqA3KGS2igfkNNoKs5_HlnciB_A43tw2rKpGuwRVSI";
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