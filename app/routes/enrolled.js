var express = require('express');
var router = express.Router();

var ssn;
router.get('/', function(req, res, next) {
 
     res.render('enrolled', { title: "Simone's Academy" });
  
 
});
router.get('/', function(req, res, next) {

     res.redirect('/profile')
  
 
});

module.exports = router;