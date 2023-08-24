const express = require("express")
const app = express()
const PORT = 3000;
const drinks = require('./models/drinks')
const foods = require('./models/foods')



app.set('view engine', 'ejs');

//Home 
app.get("/", (req, res) => {
    res.send("Welcome to the GitPub App!"); 
});

//Index
app.get("/drinks", (req, res) => {
    res.render("drinks_index.ejs", {drinks});
});

app.get("/foods", (req, res) => {
    res.render("foods_index.ejs", {foods});
});


//Show
app.get("/drinks/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const drink = drinks[id];
    res.render('drinks_show', {drink});
});

app.get("/foods/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const food = foods[id];
    res.render('foods_show', {food});
});


app.listen(PORT, () => console.log("server running big dawg"));

