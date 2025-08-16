const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: false,
        // unique: true
    },
    profileImg: {
        type: String,
        required: false,
    }
},  {
        timestamps: String,
    }
)

module.exports = userModel = mongoose.model('Users', userSchema)