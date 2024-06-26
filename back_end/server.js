const express = require("express");
const path = require("path");
const mongoose = require("mongoose");
const router = require("./src/paths/paths");
const multer = require("multer");
const Product = require("./src/models/productModel");
const authRouter = require("./src/paths/authRoutes");
const cookie_parser = require("cookie-parser");

const app = express();
app.use(express.json());
app.use(cookie_parser());

app.use(express.static(path.join(__dirname, "../frontend/dist")));
app.use(router);
app.use(authRouter);

const port = process.env.PORT || 8080;
const database = "mongodb+srv://seelennebel:seelennebel@brightweb.sllhcs1.mongodb.net/WebDatabase"
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
    const {name, brand, price, description } = req.body;
    const file = req.file; 
    const orig = file.originalname;
    console.log(orig);
    try {
        const product = await Product.create({ name, brand, price, file:orig, description });
        res.send(product);
    }
    catch (error) {
        console.log(error);
    }
});

app.get("/api/image/:filename", (req, res) => {
    const { filename } = req.params;
    res.sendFile(path.join(__dirname, "/src/uploads/" + filename));
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend/dist", 'index.html'));
});




