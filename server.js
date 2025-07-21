const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = 3000;

let nowPlaying = {
    title: "Nothing is playing",
    artist: "",
    cover: "error.png",
    isPaused: false,
};

// CORS
app.use(cors());

// Parse JSON
app.use(express.json());

// Serve frontend
app.use(express.static(path.join(__dirname, 'public')));

// Endpoint to receive updates from Tampermonkey
app.post('/update', (req, res) => {
    const { title, artist, cover, isPaused } = req.body;

    nowPlaying = {
        title: title || "Unknown",
        artist: artist || "Unknown",
        cover: cover || "error.png",
        isPaused: isPaused || false
    };

    res.sendStatus(200);
});

// Endpoint to serve current song info to frontend
app.get('/now-playing', (req, res) => {
    res.json(nowPlaying);
});

app.listen(PORT, () => {
    console.log(`🎶 Now Playing server running at http://localhost:${PORT}`);
});
