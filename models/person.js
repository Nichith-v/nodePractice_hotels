const mongoose = require('mongoose');

// Define the Person schema
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true
    },
    age:{
        type: Number
    },
    work:{
        type: String,
        enum: ['Chef', 'waiter', 'manager'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unqiue: true
    },
    address:{
        type: String,
    },
    salary:{
        type: Number,
        required: true
    }
});

// Create Person model
const Person = mongoose.model('Person', personSchema);
module.exports = Person;