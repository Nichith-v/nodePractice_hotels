const mongoose = require('mongoose');
require('dotenv').config();

// Define MongoDB connection URL
const mongoURL = process.env.MONGODB_URL_LOCAL;

// Set up MongoDB connection
mongoose.connect(mongoURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

const db = mongoose.connection;

// Define event listeners for database connection

db.on('connected', ()=>{
    console.log('MongodDB connected');
})

db.on('error', (err)=>{
    console.log('MongodDB connection error', err);
})

db.on('disconnected', ()=>{
    console.log('MongodDB disconnected');
})


module.exports = db;