const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./src/paths/paths");

const app = express();
app.use(express.json());

const distDirPath = path.resolve(__dirname, "../front-end/dist");

app.use(express.static(distDirPath));
app.use(router);

const port = 8000;
const database = "mongodb+srv://seelennebel:seelennebel@brightweb.pynlr7h.mongodb.net/"
mongoose.connect(database)
    .then (() => {
        app.listen(port, () => {
            console.log(`listening on port ${port}`);
        });
    })
    .catch ((error) => {
        console.log(error);
    }) 

app.get("/api/amigo", (req, res) => {
    res.send("connected");
});


app.get('*', (req, res) => {
    res.sendFile(path.resolve(distDirPath, 'index.html'));
});




