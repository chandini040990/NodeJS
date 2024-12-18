const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.json());

const users = [
    { id: 1, name: "Admin users", role: "admin" },
    { id: 2, name: "Regular users", role: "user" },
    { id: 3, name: "Admin users", role: "admin" },
    { id: 4, name: "Regular users", role: "user" },
    { id: 5, name: "Admin users", role: "admin"}
];

//fetch all users
app.get('/users', (req, res) => {
    res.status(200).json({ messgae: "users fetched successfully", data: users })
});

// //utility function 
const getUserRole = (req) => {
    //extract the role from header
    return req.headers['role'];
}

//define admin role
app.get('/admin', (req, res) => {

    //check the user's role
    const role = getUserRole(req);

    //allow access only to admin
    if (role === "admin") {
        res.status(200).json({ message: "Welcome to the admin...you have full access" })
    } else {
        //deny access to non admin users
        res.status(403).json({ message: "access denied...only for admins" })
    }
});

//define the route for user-only
app.get("/user", (req, res) => {

    //check the user's role
    const role = getUserRole(req);

    //allow access only if the role is admin
    if (role === "user" || role === "admin") {
        res.status(200).json({ message: `Welcome to the ${role}...you have full access` })
    } else {
        //deny the access for the non admin users
        res.status(403).json({ message: "access denied..." })
    }
});

app.get("/public", (req, res) => {
    res.status(200).json({ message: "Welcome to the public users" })
});

//api for post
app.delete('/users/:id', (req, res) => {
    //check the user's role
    const role = getUserRole(req);
    const id = parseInt(req.params.id);

    if (role === "admin") {
        console.log("delete the user ID", id);

        const index = users.findIndex(user => user.id === id)

        if (index === -1) {
            console.log("user is not found for delete");
            return res.status(404).json({ message: "user is not found" })
        }

        const deletedUser = users.splice(index, 1);
        console.log("user deleted", deletedUser[0]);
        res.status(200).json({ message: "user is deleted successfully", data: deletedUser[0] })
    } else {
        //deny the access for the non admin users
        res.json({ message: "access denied to delete..." })
    }

});

app.listen(PORT, () => {
    console.log("server is running")
})