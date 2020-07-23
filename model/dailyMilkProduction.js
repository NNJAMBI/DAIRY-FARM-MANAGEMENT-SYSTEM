const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var MilkProductionSchema = new Schema({
    timeStamp: Date,
    cow: String,
    quantity: Number
});

let MilkProduction = mongoose.model('MilkProduction', MilkProductionSchema);

module.exports = MilkProduction;