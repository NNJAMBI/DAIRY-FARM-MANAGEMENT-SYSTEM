const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = new Schema({
    firstName: String,
    lastName: String,
    usermane: String,
    email: String,
    password: String,
    role: String,
    dateCreated: {
        type: Date,
        default: Date()
    },
    dateUpdated: {
        type: Date,
        default: Date()
    }
});

let User = mongoose.model('User', UserSchema);

module.exports = User;