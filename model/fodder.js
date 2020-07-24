const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FodderSchema = new Schema({
    fodderType: String,
    bucketsNumber: Number,
    entryDate: Date,
    // entryTime: Time,
});

let Fodderentry = mongoose.model('Fodderentry', FodderSchema);

module.exports = Fodderentry;
