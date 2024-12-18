// const a = 10;
// const b = 40;
// console.log(a+b);

// const http = require('http');

// const server = http.createServer((req, res) => {
//     res.writeHead(200, { "Content-Type": "text/plain" });
//     res.end("hello world!!!!");
// });

// const port = 5001;
// server.listen(port, () => {
//     console.log(`server is running at http://localhost:${port}`)
// });


const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end(
        `
        <!Doctype html>
        <html>
        <head><title>This is some title</title></head>
        <body>
        <h1>This is html sending from server</h1>
        <p>This is some paragraph</p>
        </body>
        `
    );
});

const port = 5001;
server.listen(port, () => {
    console.log(`server is running at http://localhost:${port}`)
});