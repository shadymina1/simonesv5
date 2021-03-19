/* 
Second page of enrollment
First load only when it a fresh user 
POST : when it uploads the form 
*/
var express = require('express');
var router = express.Router();
var ssn; 
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shadymina:niceclass@cluster0.8z6e8.mongodb.net/<dbname>?retryWrites=true&w=majority";




/* GET home page. */
router.get('/', function(req, res, next) {
  ssn = req.session; 
  if(ssn.email){
    res.render('enroll2', { is_session:ssn.email,title: "Simone's Academy" });
  }else{
    res.redirect('/login')
  }
  

});
 
router.post('/', function(req, res, next) {
  ssn = req.session; 
  MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function(err,db){
    if(err) throw err;
    var dbo = db.db("Simones");
    var query= {email:ssn.email} 
    var setStudent = {$set:{fName:req.body.fName,
                            lName:req.body.lName,
                            grade:req.body.grade,
                          sun3:req.body.sun3=== 'on',
                          mon3:req.body.mon3=== 'on',
                          tue3:req.body.tue3=== 'on',
                          wed3:req.body.wed3=== 'on',
                          thu3:req.body.thu3=== 'on',
                          fri3:req.body.fri3=== 'on',
                          sat3:req.body.sat3=== 'on',
                          sun4:req.body.sun4=== 'on',
                          mon4:req.body.mon4=== 'on',
                          tue4:req.body.tue4=== 'on',
                          wed4:req.body.wed4=== 'on',
                          thu4:req.body.thu4=== 'on',
                          fri4:req.body.fri4=== 'on',
                          sat4:req.body.sat4=== 'on',
                          sun5:req.body.sun5=== 'on',
                          mon5:req.body.mon5=== 'on',
                          tue5:req.body.tue5=== 'on',
                          wed5:req.body.wed5=== 'on',
                          thu5:req.body.thu5=== 'on',
                          fri5:req.body.fri5=== 'on',
                          sat5:req.body.sat5=== 'on',
                          sun6:req.body.sun6=== 'on',
                          mon6:req.body.mon6=== 'on',
                          tue6:req.body.tue6=== 'on',
                          wed6:req.body.wed6=== 'on',
                          thu6:req.body.thu6=== 'on',
                          fri6:req.body.fri6=== 'on',
                          sat6:req.body.sat6=== 'on',
                          sun7:req.body.sun7=== 'on',
                          mon7:req.body.mon7=== 'on',
                          tue7:req.body.tue7=== 'on',
                          wed7:req.body.wed7=== 'on',
                          thu7:req.body.thu7=== 'on',
                          fri7:req.body.fri7=== 'on',
                          sat7:req.body.sat7=== 'on',
                          sun8:req.body.sun8=== 'on',
                          mon8:req.body.mon8=== 'on',
                          tue8:req.body.tue8=== 'on',
                          wed8:req.body.wed8=== 'on',
                          thu8:req.body.thu8=== 'on',
                          fri8:req.body.fri8=== 'on',
                          sat8:req.body.sat8=== 'on',
                                                       }};
                                                       
    dbo.collection("students").updateOne(query,setStudent, function(err,res){
      if (err) throw err;
      console.log(res.insertedCount +" Docs");
      db.close();
    });
  });
  res.redirect('/payment');
});





module.exports = router;