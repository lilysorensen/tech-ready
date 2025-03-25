const express = require("express");
const cors = require("cors");
const { supabase } = require("./js/supabaseclient.js");

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.get("/api", async (req, res) => {
    const { data, error } = await supabase.from("user").select("*");
    if (error) {
        return res.status(400).send(error);
    }

    res.json(data);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});