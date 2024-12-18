//import the express middleware
const express = require("express");

const app = express();

//port number
const PORT = 3001;

app.use(express.json());

let users = [
    { id: 1, name: "Chand", email: "chand@gmail.com", age: 25 },
    { id: 2, name: "ram", email: "ram@gmail.com", age: 30 },
    { id: 3, name: "joy", email: "joy@gmail.com", age: 21 },
    { id: 4, name: "rita", email: "rita@gmail.com", age: 32 },
    { id: 5, name: "jerry", email: "jerry@gmail.com", age: 27 }
];

//fetch all users
app.get('/users', (req, res) => {
    res.json(users)
});

//api for post
app.post('/users', (req, res) => {
    const newUser = { id: Date.now(), ...req.body }
    users.push(newUser);
    res.status(201).json(newUser)
});

//api for post
app.get('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json("user not found")
    res.json(user)
});

//api for post
app.delete('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    users = users.filter(user => user.id !== id)
    res.status(204).send();
});

//api for post
app.patch('/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json("user not found")
    Object.assign(user, req.body);
    res.json(user)
});

//fetch all users
app.put('/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = users.findIndex(user => user.id === id)

    if (index === -1) return res.status(404).json({ message: "user is not found" })

    users[index] = { id, ...req.body }
    res.json(users[index]);
});


app.listen(PORT, () => {
    console.log("server is running")
})