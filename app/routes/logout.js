var express = require('express');
var router = express.Router();
var ssn;

/* GET home page. */
router.get('/', function(req, res, next) {
    ssn = req.session;
      req.session.destroy();  
      console.log('======test --= 1 ==--  from logout.js======');
      res.redirect('/');
      console.log('======test  --= 2 ==--  from logout.js======');

});

module.exports = router;
