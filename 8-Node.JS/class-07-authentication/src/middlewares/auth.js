const jwt = require('jsonwebtoken')
const { secret } = require('../configs/auth.json')

module.exports = (req, res, next) => {
    const token = req.header.authorization;
    if(!token) return res.status(401).json('please inform your token')
    
    jwt.verify(token, secret, (error, decoded) => {

        if (error) return res.status(401).json(error);
        req.userID = decode.id;
        console.log(decode);
        next();
    })
}