const mongoose = require('mongoose');

// Define MongoDB connection URL
const mongoURL = 'mongodb://localhost:27017/hotels';

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