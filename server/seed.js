const mongoose = require('mongoose');
require('dotenv').config();
const Game = require('./models/games');

//run a function without our mongoose

mongoose.connect(process.env.DATABASE_URL);

async function seed() {
    await Game.create({
        name: 'JON',
        score: 10
    });

    console.log('Seeded');
}

seed();