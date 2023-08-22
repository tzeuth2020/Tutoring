const express = require("express");
const User = require('../models/UserModel');


module.exports = async (req, res, next) => {
    try {
        const { email } = req.body;
        if (!email ) {
            res.send("all fields required")
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({message: "Email does not exist"});
        }
        await User.deleteOne({ email });
        res.status(201).json({
             message: `User ${email} removed`,
        });
    } catch (err) {
        console.log(err);
    }
}