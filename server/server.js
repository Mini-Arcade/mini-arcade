const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const PORT = process.env.PORT || 3005;

const app = express();

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello World');
} 
);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})