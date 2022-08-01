const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();
const Game = require('./models/games');

const PORT = process.env.PORT || 3005;

const app = express();

app.use(cors());

mongoose.connect(process.env.DATABASE_URL);

app.get('/', (req, res) => {
    res.send('Hello World');
} 
);

app.get('/games', async (req, res) => {
    // const filterQuery = {};


    const games = await Game.find();
    res.send(games);
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})