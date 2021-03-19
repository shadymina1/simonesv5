var express = require('express');
var router = express.Router();
var ssn;
/* GET home page. */
router.get('/', function(req, res, next) {
  ssn = req.session;
  res.render('index', { is_session:ssn.email,title: "Simone's Academy" });
});

module.exports = router;
