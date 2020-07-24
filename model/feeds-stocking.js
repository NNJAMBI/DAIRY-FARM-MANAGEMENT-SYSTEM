const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var FeedSchema = new Schema({
    typeSuppliment: String,
    typeCow: String,
    
});

let Feedrecord = mongoose.model('Feedrecord', FeedSchema);

module.exports = Feedrecord;