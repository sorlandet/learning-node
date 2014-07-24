var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
    'use strict';
    res.render('index', { title: 'Express' });
});

router.get('/error', function mainHandler(req, res) {
    'use strict';
    throw new Error('Broke!');
});

module.exports = router;
