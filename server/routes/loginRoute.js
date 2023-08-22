const express = require("express");
const User = require('../models/UserModel');
const bcrypt = require("bcryptjs");


module.exports = async (req, res, next) => {
    try {
        const { email, password} = req.body;
        if (!email || !password) {
            return res.send("all fields required")
        }
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(400).json({message: "Email does not exist"});
        }
        authorized = await bcrypt.compare(password, user.password)
        if (!authorized) {
            return res.status(400).json({message: "Incorrect Password"});
        }
        console.log(user.status);
        if (user.status === 'admin') {
            return res.status(201).json({
                message: "Admin logged in successfully",
                status: 'admin'
            });
        } else {
            return res.status(201).json({
                message: "User logged in successfully",
                status: 'user'
            });
        }
        next();
    } catch (err) {
        console.log(err);
    }
}