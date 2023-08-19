require('dotenv').config();
const express = require("express");
const axios = require('axios');
const app = express();
const path = require("path");
const port = process.env.PORT || 5000

app.use(express.json());


// Weather
const API_KEY = process.env.REACT_APP_API_KEY;

app.get('/api/weather', async (req, res) => {
    const { lat, lon } = req.query;
    const weatherRes = await axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${API_KEY}`);
    res.json(weatherRes.data);
});

app.get('/api/location', async (req, res) => {
    const { zip } = req.query;
    const locationRes = await axios.get(`https://api.openweathermap.org/geo/1.0/zip?zip=${zip},US&appid=${API_KEY}`);
    res.json(locationRes.data);
});


// Serve applications
app.use("/", express.static(path.join("frontend/build")));



app.listen(port, () => console.log("Working"));