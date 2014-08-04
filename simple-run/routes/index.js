'use strict';

var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    res.render('index', { title: 'Express' });
});

router.get('/error', function mainHandler() {
    throw new Error('Broke!');
});

module.exports = router;
