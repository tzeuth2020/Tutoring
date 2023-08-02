const jwt = require('jsonwebtoken');


module.exports = (req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log(authHeader);
    if  (!authHeader) {
        res.status(401).send('invalid credentials');
    } else {
        const token = authHeader.split(' ')[1];
        console.log(token);
        jwt.verify(token, process.env.SECRET, (err, decoded) => {
            if (err) {
                res.status(403).send('invalid credentials');
            } else {
                next();
            }
        })
    }
}