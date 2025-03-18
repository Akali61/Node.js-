// request-response

// http

const { create } = require("domain");
var http = require ("http"); // node modules => http, os, fs
var fs = require ("fs");

var server = http.createServer((req,res) => {
    
    if(req.url=="/") {
        fs.readFile("index.html", (err, html) => {
            res.write(html);
            res.end();
        });
    } else if(req.url == "/products") {
        fs.readFile("products.html", (err, html) => {
            res.write(html);
            res.end();
        });
    } else {
        fs.readFile("404.html", (err, html) => {
            res.write(html);
            res.end();
        });
    }
})

server.listen(3000, () => {
    console.log("Node js server at port 3000")
});