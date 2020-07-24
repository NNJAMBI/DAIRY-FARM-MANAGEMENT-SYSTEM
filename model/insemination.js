const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var InseminationSchema = new Schema({
    aiCost: Number,
    servingBull: String,
    date: {
        type: Date,
        default: Date()
    },
    cowName: String,
    breed: String
});

let Insemination = mongoose.model('Insemination', InseminationSchema);

module.exports = Insemination;