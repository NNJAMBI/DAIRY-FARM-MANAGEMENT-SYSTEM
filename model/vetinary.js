const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var VetSchema = new Schema({
    typeBreed: String,
    checkupDur: String,
    typeDisea: String,
    vaccTransp: String,
    vaccStora: String,
    rvaccHandl: String,
});

let Vetrecord = mongoose.model('Vetrecord', VetSchema);

module.exports = Vetrecord;