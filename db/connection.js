const mongoose = require("mongoose");
require('dotenv').config();

console.log("Attempting to connect to MongoDB...");

mongoose.connect(process.env.mongoDB_URL)
    .then(() => {
        console.log('Connection established');
    })
    .catch((error) => {
        console.error('Error in connection:', error.message);
    });
