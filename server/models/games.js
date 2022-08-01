const mongoose = require('mongoose');

const {Schema} = mongoose;

const gamesSchema = new Schema({
    name: String,
    Score: Number,
})

const Game = mongoose.model('Game', gamesSchema);

modeule.exports = Game;