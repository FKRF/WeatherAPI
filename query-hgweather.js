import express from "express";
import fetch from "node-fetch";

const app = express();
const PORT = 3000;
const key = "c2a188ac";

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const response = await fetch(`https://api.hgbrasil.com/weather?&key=${key}&city_name=${city}`);
    const data = await response.json();
    res.json(data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
