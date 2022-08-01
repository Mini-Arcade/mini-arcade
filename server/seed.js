const mongoose = require('mongoose');
require('dotenv').config();

//run a function without our mongoose

mongoose.connect(process.env.DATABASE_URL);