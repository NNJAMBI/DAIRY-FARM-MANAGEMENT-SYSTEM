// Import express package
const express = require('express');

// Initialize express
const app = express();

// Set a static folder
app.use(express.static('public'));

// route for the index page
app.get('/', (req, res)=>{
    response.send('<h1> Welcome to my app</h1>')
});

// Define the port number
const PORT = 8000;

app.listen(PORT, ()=>{
    console.log(`Server is listening on port ${PORT}`)
})