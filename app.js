// Import express package
const express = require('express');
const mongoose = require('mongoose');


let indexRouter = require('./routes/dashboard');
// let vetinaryRouter = require('./routes/vetinary');
//let createUserRouter = require('./routes/createUser')

//Connecting to DB
let mongoUrl = 'mongodb://localhost:27017/';
let dbName = 'dailyfarm';
mongoose.connect(mongoUrl + dbName, { useNewUrlParser: true });
let db = mongoose.connection;

//Test Connection
db.once('open', ()=>{
    console.log('Database connected successfully');
});

//Test Connection Error
db.on('error', (error)=>{
    console.log(error);
});

// Initialize express
const app = express();

// Set up a view engine
app.set('view engine', 'ejs');

// Set a static folder
app.use(express.static('public'));

// Define the index router
app.use('/', indexRouter);
//app.use('/create-user', )

// app.use('/vetinary', vetinaryRouter);

// Define the port number
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})