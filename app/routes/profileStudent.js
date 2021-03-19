var express = require('express');
var router = express.Router();
var ssn;
/* GET home page. */
router.get('/', function(req, res, next) {
  ssn = req.session; 
  if(ssn.email){
      res.render('profileStudent', {
                          is_session:ssn.email,
                          title: "Recieved",
                          fName:ssn.fName,
                          lName:ssn.lName,
                          grade:ssn.grade,
                          sun3:ssn.sun3,
                          mon3:ssn.mon3,
                          tue3:ssn.tue3,
                          wed3:ssn.wed3,
                          thu3:ssn.thu3,
                          fri3:ssn.fri3,
                          sat3:ssn.sat3,
                          sun4:ssn.sun4,
                          mon4:ssn.mon4,
                          tue4:ssn.tue4,
                          wed4:ssn.wed4,
                          thu4:ssn.thu4,
                          fri4:ssn.fri4,
                          sat4:ssn.sat4,
                          sun5:ssn.sun5,
                          mon5:ssn.mon5,
                          tue5:ssn.tue5,
                          wed5:ssn.wed5,
                          thu5:ssn.thu5,
                          fri5:ssn.fri5,
                          sat5:ssn.sat5,
                          sun6:ssn.sun6,
                          mon6:ssn.mon6,
                          tue6:ssn.tue6,
                          wed6:ssn.wed6,
                          thu6:ssn.thu6,
                          fri6:ssn.fri6,
                          sat6:ssn.sat6,
                          sun7:ssn.sun7,
                          mon7:ssn.mon7,
                          tue7:ssn.tue7,
                          wed7:ssn.wed7,
                          thu7:ssn.thu7,
                          fri7:ssn.fri7,
                          sat7:ssn.sat7,
                          sun8:ssn.sun8,
                          mon8:ssn.mon8,
                          tue8:ssn.tue8,
                          wed8:ssn.wed8,
                          thu8:ssn.thu8,
                          fri8:ssn.fri8,
                          sat8:ssn.sat8,
                                          });
  }else{
    res.redirect('/login')
  }


});

module.exports = router;
