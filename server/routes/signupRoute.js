const User = require('../models/UserModel');

module.exports = async (req, res, next) => {
    try {
        const {email, password} = req.body;
        if (!email || !password) {
            res.send("all fields required");
        }
        const hasUser = await User.findOne({ email });
        if (hasUser) {
            return res.json({message: "User Already Exists"});
        }
        await User.create({ email, password, status: "student" });
        console.log(email)
        if (email === 'admin' || email === 'kathryn') {
            await User.updateOne({ email }, {status: "admin"});
            res.status(201).json({
                message: "User logged in successfully",
                status: 'admin'
            });
        } else {
            res.status(201).json({
                message: "User logged in successfully",
                status: 'user'
            }); 
        }
        next();
    } catch (err) {
        console.log(err);
    }
}