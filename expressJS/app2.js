// const express = require('express');
// const app = express();
// const PORT = 3000;

// app.use(express.static("public"));

// //define simple route
// app.get('/', (req, res) => {
//     res.send("static files send")
// });

// app.listen(PORT, () => {
//     console.log(`the application is running at localhost:${PORT}`);
// });

const express = require('express');
const path = require("path");
const app = express();
const PORT = 3000;

app.use(express.static("public"));

//define simple route
app.get('/about', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "about.html"))
})

//define simple route
app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "contact.html"))
})

app.listen(PORT, () => {
    console.log(`the application is running at localhost:${PORT}`);
});