const express = require('express');
const router = express.Router();
const User = require('../model/users');
const Employees = require('../model/Employees');
const Vetrecord = require('../model/vetinary');
const Insemination = require('../model/insemination');

const MilkProduction = require('../model/dailyMilkProduction')
// const { body,validationResult } = require('express-validator/check');
// const { sanitizeBody } = require('express-validator/filter');

router.get('/', (req, res)=> {
    res.render('dashboard', {msg: req.query.msg});
});

router.get('/create-user', (req, res)=>{
    res.render('createUser', {msg: req.query.msg});
});

router.get('/vetinary', (req, res)=>{
    res.render('vetinary', {msg: req.query.msg});
});

router.get('/feeds-stocking', (req, res)=>{
    res.render('feeds-stocking', {msg: req.query.msg});
});

router.get('/milkProduction', (req, res)=>{
    res.render('dailyMilkProduction', {msg: req.query.msg});
});

router.post('/save-milk-production', (req, res)=>{
    console.log(req.body);
    if(req.body.timeStamp === '') {
        res.redirect('/milkProduction?msg=Oops, timeStamp cannot be blank.');
    } else if(req.body.cow === '' && req.body.cow.length <= 2 && req.body.cow.length >= 20){
        res.redirect('/milkProduction?msg=Oops, cow name cannot be blank or less than 2 characters.');
    } else if(req.body.quantity === '' && req.body.quantity.length <= 0 && req.body.quantity.length >= 50){
        res.redirect('/milkProduction?msg=Oops, quantity cannot be blank or less than zero.');
    } else {
        let newMilkProduction = new MilkProduction({
            timeStamp: req.body.timeStamp,
            cow: req.body.cow,
            quantity: req.body.quantity
        });
        newMilkProduction.save();
        res.redirect('/get-all-milk-records?msg=Record Saved Successfully.');
    }

});

router.post('/save-user', (req, res)=>{
    console.log(req.body);
        if(req.body.firstName === '' && req.body.firstName.length <= 2 && req.body.firstName.length >= 20) {
            res.redirect('/create-user?msg=Oops, first name cannot be blank or less than 2 characters.');
        } else if(req.body.lastName === '' && req.body.lastName.length <= 2 && req.body.lastName.length >= 20){
            res.redirect('/create-user?msg=Oops, last name cannot be blank or less than 2 characters.');
        } else if(req.body.username === '' && req.body.username.length <= 3 && req.body.username.length >= 20){
            res.redirect('/create-user?msg=Oops, username cannot be blank or less than 3 characters.');
        } else if(req.body.email === '' && req.body.email.length <= 5 && req.body.email.length >= 50){
            res.redirect('/create-user?msg=Oops, email cannot be blank or less than 5 characters.');
        } else if(req.body.password === '' && req.body.password.length <= 8 && req.body.password.length >= 50){
            res.redirect('/create-user?msg=Oops, password cannot be blank or less than 8 characters.');
        } else if(req.body.cpassword === '' && req.body.cpassword.length <= 8 && req.body.cpassword.length >= 50){
            res.redirect('/create-user?msg=Oops, confirm password cannot be blank or less than 8 characters.');
        } else {
            if(req.body.password === req.body.cpassword) {
                let newUser = new User({
                    firstName: req.body.firstName,
                    lastName: req.body.lastName,
                    username: req.body.username,
                    email: req.body.email,
                    password: req.body.password,
                    role: req.body.role
                });
                newUser.save();
                res.redirect('/create-user?msg=User Saved Successfully.');
            } else {
                res.redirect('/create-user?msg=Oops, please retry again.');
            }
        }
});

router.post('/vet-info', (req, res)=>{
    console.log(req.body);
        if(req.body.typeBreed === '') {
            res.redirect('/vetinary?msg=Oops, kindly select type of breed.');
        } else if(req.body.checkupDur === ''){
            res.redirect('/vetinary?msg=Oops, kindly provide last check up duration.');
        } else if(req.body.typeDisea === ''){
            res.redirect('/vetinary?msg=Oops, kindly input disease affecting cattle.');
        } else if(req.body.vaccTransp === '' ){
            res.redirect('/vetinary?msg=Oops, you need to provide answer yes or no.');
        } else if(req.body.vaccStora === ''){
            res.redirect('/vetinary?msg=Oops, you need to provide answer yes or no.');
        } else if(req.body.vaccHandl === ''){
            res.redirect('/vetinary?msg=Oops, you need to provide answer yes or no.');
        } else {
                let vetSchema = new Vetrecord({
                    typeBreed: req.body.typeBreed,
                    checkupDur: req.body.checkupDur,
                    typeDisea: req.body.typeDisea,
                    vaccTransp: req.body.vaccTransp,
                    vaccStora: req.body.vaccStora,
                    vaccHandl: req.body.vaccHandl
                 }) ;
                vetSchema.save();
                res.redirect('/vetinary?msg=User Saved Successfully.');
            }

});

router.get('/employees', (req, res)=>{
    res.render('Employees');
});

router.post('/save-employee', (req, res)=>{
    console.log(req.body);
        if(req.body.name === '' && req.body.name.length <= 2 && req.body.name.length >= 20) {
            res.redirect('/employees?msg=Oops, first name cannot be blank or less than 2 characters.');
        } else if(req.body.idnumber === '' && req.body.idnumber.length < 8){
            res.redirect('/employees?msg=Oops, last name cannot be blank or less than 2 characters.');
        } else if(req.body.phoneNumber === '' && req.body.phoneNumber.length <= 10){
            res.redirect('/employees?msg=Oops, username cannot be blank or less than 3 characters.');
        } else if(req.body.salary === '' && req.body.salary.length <= 3 && req.body.salary >= 8){
            res.redirect('/employees?msg=Oops, email cannot be blank or less than 5 characters.');
        } else if(req.body.employmentDate === ''){
            res.redirect('/employees?msg=Oops, employmentDate cannot be blank or less than 8 characters.');
        } else if(req.body.terminationDate === '' ){
            res.redirect('/employees?msg=Oops, confirm terminationDate cannot be blank or less than 8 characters.');
        }
        else {

                let newEmployee = new Employees({
                    name: req.body.name,
                    idNumber: req.body.idnumber,
                    phoneNumber:req.body.phoneNumber,
                    salary: req.body.salary,
                    employmentDate: req.body.employmentDate,
                    terminationDate: req.body.terminationDate,
                    status: req.body.status
                });
                newEmployee.save();
                res.redirect('/employees?msg=Employee Saved Successfully.');

        }
});
router.get('/fodder', (req, res)=>{
    res.render('fodder');
});

router.get('/insemination', (req, res)=>{
    res.render('insemination', {msg: req.query.msg});
});

router.get('/get-all-users', (req, res)=>{
    User.find({}, (error, users)=>{
        if(error){
            console.log(error);
        } else {
            console.log(users);
            res.render('allUsers', {
                users:users
            })
        }
    });
});

router.get('/get-all-milk-records', (req, res)=>{
    MilkProduction.find({}, (error, records)=>{
        if(error){
            console.log(error);
        } else {
            console.log(records);
            res.render('allMilkRecords', {
                records:records
            })
        }
    });
});

router.get('/get-all-vet-details', (req, res)=>{
    Vetrecord.find({}, (error, records)=>{
        if(error){
            console.log(error);
        } else {
            console.log(records);
            res.render('allVetRecords', {
                records: records
            });
        }
    });
});

router.post('/save-insemination-data', (req, res)=>{
    console.log(req);
    console.log("AI Cost lenght: " + req.body.aiCost.length);
    if(req.body.aiCost.length <= 3 && req.body.aiCost.length >= 5 &&
        req.body.aiCost <= 500 && req.body.aiCost >= 15000){
        res.redirect('/insemination?msg=Oops, The cost should be between the range of 500 to 15000.');
    } else if(req.body.servingBull === '' && req.body.servingBull.length <= 3){
        res.redirect('/insemination?msg=Oops, The serving bull name cannot be blank or less than three characters');
    }  else if(req.body.cowName === '' && req.body.cowName.length <= 3) {
        res.redirect('/insemination?msg=Oops, The cow name cannot be blank or less than three characters');
    }  else if(req.body.breed === '' && req.body.breed.length <= 3){
        res.redirect('/insemination?msg=Oops, The breed cannot be blank or less than three characters')
    } else {
        let insemination = new Insemination({
            aiCost: req.body.aiCost,
            servingBull: req.body.servingBull,
            cowName: req.body.cowName,
            breed: req.body.breed
        }) ;
        insemination.save();
        res.redirect('/insemination?msg=Successfully save insemination data.')
    }
});

router.get('/get-all-insemination-data', (req, res)=>{
    Insemination.find({}, (error, records)=>{
        if(error){
            console.log(error);
        } else {
            console.log(records);
            res.render('allInseminationRecords', {
                records: records
            });
        }
    });
});

module.exports = router;
