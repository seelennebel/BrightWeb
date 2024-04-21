const jwt = require('jsonwebtoken');

const require_auth = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, "bright web", (err, decoded_token) => {
            if(err) {
                console.log(err);
                res.redirect("/login");
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


const check_user = (req, res, next) => {
    const token = req.cookies.jwt;
    if(token) {
        jwt.verify(token, 'bright web', async (err, decodedToken) => {
            if(err) {
                res.status(400);
                next();
            } 
            else {
                res.status(200).json("success");
                next();
            }
        });
    }
    else {
        res.status(400);
    }
};

module.exports = { require_auth, check_user };