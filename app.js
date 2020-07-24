// Import express package
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

// const expressValidator = require('express-validator');
// const expressSession = require('express-session');

let routes = require('./routes/pages');

//Connecting to DB
let mongoUrl = 'mongodb://localhost:27017/';
let dbName = 'dailyfarm';
mongoose.connect(mongoUrl + dbName, { useUnifiedTopology: true,  useNewUrlParser: true });
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

// Body Parser Middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());

// Define the index router
app.use('/', routes);
// app.use(expressValidator());
// app.use(expressSession({secret: 'max', saveUninitialized: false, resave: false}));

// Define the port number
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
});