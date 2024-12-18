//import express module
const express = require("express");
const bodyParser = require("body-parser")
const path = require('path')
const app = express();
const PORT = 3000;


app.use(express.static("public"));

app.use(bodyParser.urlencoded({ extended: true })); //to parse from data

//define simple route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"))
})

//define simple route
app.post('/submit', (req, res) => {
    const { name, email, message } = req.body; //extract form data
    res.sendFile(path.join(__dirname, "public", "success.html"))
})

app.listen(PORT, () => {
    console.log(`the application is running at localhost:${PORT}`);
});