import { supabase } from "./supabaseclient.js";

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

async function test() {
    const {
        data,
        error
    } = await supabase.from("users").upsert([{
            first_name: "lily"
        }

    ])
    if (error) {
        console.error("something went wront", error.message);
    }
}

async function addAdmin() {
const { data, error } = await supabase.rpc('add_admin', {
    p_first_name: 'John',
    p_last_name: 'Doe',
    p_password: 'securepassword'
});

if (error) {
    console.error('Error adding admin:', error);
} else {
    console.log('Admin added successfully:', data);
}
}

addAdmin();