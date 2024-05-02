const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const require_auth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, "bright web", (err, decoded_token) => {
            if(err) {
                console.log(err);
                res.redirect("/login");
                res.end();
            }
            else {
                console.log(decoded_token);
                next();
            }
        });
    }
    else {
        res.redirect("/login");
    }
};

const check_user = async (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'bright web', async (err, decodedToken) => {
            if(err) {
                res.status(400);
                res.end();
                next();
            } 
            else {
                const user = await User.find({_id : decodedToken.id});
                res.status(200).json(user);
                res.end();
                next();
            }
        });
    }
    else {
        res.status(400);
        res.end()
    }
};

const find_user = async (req, res, next) => {
    const { id } = req.body;
    try {
        const user = await User.find({_id: id});
        res.status(200).json(user);
        next();
    }
    catch(error) {
        console.log(error);
        res.status(403).json({error : "not found"});
        next();
    }
}


const modify_orders = async (req, res) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'bright web', async (err, decodedToken) => {
            if(err) {
                res.status(400);
                res.end();
            } 
            else {
                const { new_orders } = req.body;
                const user = await User.updateOne(
                    {_id : decodedToken.id},
                    { $push : { orders: { $each: new_orders }}}
                );
                res.status(200).json(user);
                res.end();
            }
        });
    }
    else {
        res.status(400);
        res.end()
    }
}


module.exports = { require_auth, check_user, find_user, modify_orders };