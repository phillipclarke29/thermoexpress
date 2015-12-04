var express = require('express');
var router = express.Router();
var thermo = require('../models/thermo.js');
var mongoose   = require('mongoose');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/temp', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/temp', function(req, res, next) {
  new thermo({temp : req.body.thermo})
 .save(function(err, thermo) {
   console.log(thermo)
   res.redirect('/');
 });

});

module.exports = router;
