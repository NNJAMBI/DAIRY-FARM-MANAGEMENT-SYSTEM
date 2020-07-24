const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var fodderSchema = new Schema({
    fodderType: String,
    bucketsNumber: Number,
    entryDate: Date,
    entryTime: Time,
});

let Fodderentry = mongoose.model('Fodderentry', fodderSchema);

module.exports = Fodderentry;
