import express from "express";
import fetch from "node-fetch";
import cors from "cors";

const app = express();
const PORT = 3000;
let apiKey = process.env.API_KEY;

const urlExample = `https://api.hgbrasil.com/weather?&key=c2a188ac&city_name=São Paulo,SP`;

app.use(cors());

app.get("/weather", async (req, res) => {
    const city = req.query.city;
    const response = await fetch(`https://api.hgbrasil.com/weather?&key=${apiKey}&city_name=${city}`);
    const data = await response.json();
    res.json(data);
    console.log(data);
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
