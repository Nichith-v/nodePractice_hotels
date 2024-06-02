const express = require('express')
const app = express()
const db = require('./db');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const Person = require('./models/person');
const MenuItem = require('./models/MenuItem');

app.get('/', function (req, res) {
  res.send('Hello World')
})

// Import the person routes
const personRoutes = require('./routes/personRoutes');

// Import the menu routes
const menuRoutes = require('./routes/menuRoutes');

// Use the person routes for requests to /person
app.use('/person', personRoutes);

// Use the menu routes for requests to /menu
app.use('/menu', menuRoutes);


app.listen(3000, ()=>{
    console.log('listening on port 3000');
})