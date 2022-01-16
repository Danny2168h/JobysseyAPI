const mongoose = require('mongoose');

const PostUserInfoSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
});

module.exports = mongoose.model('PostUserInfo', PostUserInfoSchema);