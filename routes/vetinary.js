const express = require('express');
const router = express.Router();

router.get('/vetinary', (req, res) => {
    res.render('vetinary');
});

module.exports = router ;