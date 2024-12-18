//import express module
const express = require("express");
const app = express();

function logger(req,res,next) {
    console.log(`request method: ${req.method}, url: ${req.url}`)
    next();
}

app.use(logger);

//define simple route
app.get('/hello', (req, res) => {
    res.send("hello world")
})


app.listen(3001, () => {
    console.log(`the application is running at localhost:3001`);
});