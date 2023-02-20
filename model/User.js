const mongoose = require('mongoose');

const UserModel = new mongoose.Schema({
    name: {
        type: String,
        unique: true
    },
    message: String,
    date: {
        type:Date,
        createdAt:()=>Date.now()
    },
    email: {
        type: String,
        unique: true,
        lowercase:true
    }

})

module.exports = mongoose.model('student', UserModel);
