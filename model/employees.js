const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    name: String,
    idNumber: Number,
    phoneNumber: Number,
    salary: Number,
    employmentDate: Date,
    terminationDate: Date,
    status: String,
    dateCreated: {
        type: Date,
        default: Date()
    },
    dateUpdated: {
        type: Date,
        default: Date()
    }
});

let Employees = mongoose.model('Employees', EmployeeSchema);

module.exports = Employees;