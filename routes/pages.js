const express = require('express');
const router = express.Router();
const User = require('../model/users');

router.get('/', (req, res)=> {
    res.render('dashboard');
});

router.get('/create-user', (req, res)=>{
    res.render('createUser');
});

router.get('/vetinary', (req, res)=>{
    res.render('vetinary');
});

router.get('/addsEmployee', (req, res)=>{
    res.render('addEmployee');
});

module.exports = router;