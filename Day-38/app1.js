//import the express middleware
const express = require("express");

const app = express();

//port number
const PORT = 5001;

app.use(express.json());

//user data
let users = [
    { id: 1, name: "chand" },
    { id: 2, name: "ram" },
    { id: 3, name: "sam" },
    { id: 4, name: "joy" },
    { id: 5, name: "jack" },
]

//fetch all users
app.get('/api/users', (req, res) => {
    res.status(200).json({ messgae: "users fetched successfully", data: users })
});

//api for post
app.post('/api/users', (req, res) => {
    const { name } = req.body;
    if (!name) {
        console.log("name is missing in the request body");
        return res.status(400).json({ message: "name is missing" })
    }

    const newUser = { id: users.length + 1, name }
    users.push(newUser);
    console.log("user added", newUser)
    res.status(201).json({ message: "user is added successfully", data: newUser })
})

//delete functionality to remove the user
app.delete('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("delete the user ID", id);

    const index = users.findIndex(user => user.id === id)

    if (index === -1) {
        console.log("user is not found for delete");
        return res.status(404).json({ message: "user is not found" })
    }

    const deletedUser = users.splice(index, 1);
    console.log("user deleted", deletedUser[0]);
    res.status(200).json({ message: "user is deleted successfully", data: deletedUser[0] })
})

//put functionality to remove the user
app.put('/api/users/:id', (req, res) => {
    const id = parseInt(req.params.id);
    console.log("put request for the user ID", id);
    console.log("request body", req.body);

    const index = users.findIndex(user => user.id === id)

    if (index === -1) {
        console.log("user is not found for put");
        return res.status(404).json({ message: "user is not found" })
    }

    const { name } = req.body;
    if (!name) {
        console.log("name is missing in the request body");
        return res.status(400).json({ message: "name is missing" })
    }

    users[index] = { id, name }

    console.log("user updated", users[index]);
    res.status(200).json({ message: "user is updated successfully", data: users[index] })
});

//api for post
app.patch('/api/users/:id', (req, res) => {
    const user = users.find(user => user.id === parseInt(req.params.id));
    if (!user) return res.status(404).json("user not found")
    Object.assign(user, req.body);
    res.json(user)
});

app.listen(PORT, () => {
    console.log("server is running")
})