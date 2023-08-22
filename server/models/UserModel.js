const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, "Your email address is required"],
        unique: true,
    },
    password: {
        type: String,
        require: [true, "Your password is required"],
    },
    status: {
        type: String,
    }
});

userSchema.pre("save", async function(next) {
    console.log(this.password);
    this.password = await bcrypt.hash(this.password, 12);
    next();
});

const userModel = mongoose.model('User', userSchema);
module.exports = userModel;