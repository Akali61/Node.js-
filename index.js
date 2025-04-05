const express = require("express");
const app = express();

app.set("view engine", "ejs");
app.use(express.static('public'));
app.use(express.static('node_modules'));

const data = [
    {id: 1, name:"Iphone 14", price: 700, isActive: true, imageUrl:"1.jpg"},
    {id: 2, name:"Iphone 15", price: 1000, isActive: true, imageUrl:"2.jpg"},
    {id: 3, name:"Iphone 16", price: 1300, isActive: true, imageUrl:"3.jpg"}
];

// routes

app.use("/products/:id", function(req, res) {
    const product = data.find(p => p.id == req.params.id);
    res.render("productsdetails", product);
})

app.use("/products", function(req, res) {
    res.render("products", {
        list : data
    });
})

app.use("/", function(req, res) {
    res.render("index");
})

app.listen(3000, () => {
    console.log("Listening on port 3000");
})