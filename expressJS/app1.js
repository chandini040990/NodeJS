//import express module
const express = require("express");

//create express app
const app = express();

//define simple route
app.get('/', (req, res) => {
    res.send("hello world")
});

//start the server
const PORT = 5001;

app.listen(PORT, () => {
    console.log(`the application is running at localhost:${PORT}`);
});