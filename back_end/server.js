const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./src/paths/paths");
const multer = require("multer");
const Product = require("./src/models/productModel");

const app = express();
app.use(express.json());

//const distDirPath = path.join(__dirname, "../front-end/dist");

app.use(express.static("/Users/seelennebel/Desktop/BrightWeb/front_end/dist"));
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

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './src/uploads')
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname)
    }
});
    
const upload = multer({ storage: storage })

app.post("/api/upload", upload.single("file"), async (req, res) => {
    const {name, brand, price } = req.body;
    const file = req.file; 
    const orig = file.originalname;
    console.log(orig);
    try {
        const product = await Product.create({ name, brand, price, file:orig });
        res.send(product);
    }
    catch (error) {
        console.log(error);
    }
});

app.get("/api/image/:filename", (req, res) => {
    const { filename } = req.params;
    res.sendFile("/Users/seelennebel/Desktop/BrightWeb/back_end/src/uploads/" + filename);
});

app.get('*', (req, res) => {
    res.sendFile(path.join("/Users/seelennebel/Desktop/BrightWeb/front_end/dist", 'index.html'));
});




