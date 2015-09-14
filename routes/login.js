/**
 * Created by linux on 15-9-11.
 */
var express = require('express');
var router = express.Router();

/* Distribute request to login domain */
router.get('/', function(req, res) {
    res.render('login', { title: 'Login' });
});

module.exports = router;
