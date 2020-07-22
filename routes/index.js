const express = require('express');
const router = express.Router();
const User = require('../model/users');

router.get('/', (req, res)=> {
    res.render('index');
});

module.exports = router;