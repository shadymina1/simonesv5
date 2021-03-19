var express = require('express');
var router = express.Router();
var ssn;
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shadymina:niceclass@cluster0.8z6e8.mongodb.net/<dbname>?retryWrites=true&w=majority";

/* GET home page. */
router.get('/', function(req, res, next) {
  ssn = req.session; 
  if(ssn.email){
      res.render('changingData', { 
        title: "Changing Data",
        is_session:ssn.email,
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

router.post('/', function(req, res, next) {
  
  ssn.fName = req.body.fName; 
  ssn.lName = req.body.lName; 
  ssn.grade = req.body.grade; 
  ssn.sun3=req.body.sun3;
  ssn.mon3=req.body.mon3;
  ssn.tue3=req.body.tue3;
  ssn.wed3=req.body.wed3;
  ssn.thu3=req.body.thu3;
  ssn.fri3=req.body.fri3;
  ssn.sat3=req.body.sat3;
  ssn.sun4=req.body.sun4;
  ssn.mon4=req.body.mon4;
  ssn.tue4=req.body.tue4;
  ssn.wed4=req.body.wed4;
  ssn.thu4=req.body.thu4;
  ssn.fri4=req.body.fri4;
  ssn.sat4=req.body.sat4;
  ssn.sun5=req.body.sun5;
  ssn.mon5=req.body.mon5;
  ssn.tue5=req.body.tue5;
  ssn.wed5=req.body.wed5;
  ssn.thu5=req.body.thu5;
  ssn.fri5=req.body.fri5;
  ssn.sat5=req.body.sat5;
  ssn.sun6=req.body.sun6;
  ssn.mon6=req.body.mon6;
  ssn.tue6=req.body.tue6;
  ssn.wed6=req.body.wed6;
  ssn.thu6=req.body.thu6;
  ssn.fri6=req.body.fri6;
  ssn.sat6=req.body.sat6;
  ssn.sun7=req.body.sun7;
  ssn.mon7=req.body.mon7;
  ssn.tue7=req.body.tue7;
  ssn.wed7=req.body.wed7;
  ssn.thu7=req.body.thu7;
  ssn.fri7=req.body.fri7;
  ssn.sat7=req.body.sat7;
  ssn.sun8=req.body.sun8;
  ssn.mon8=req.body.mon8;
  ssn.tue8=req.body.tue8;
  ssn.wed8=req.body.wed8;
  ssn.thu8=req.body.thu8;
  ssn.fri8=req.body.fri8;
  ssn.sat8=req.body.sat8;



  MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("Simones");
    var query= {email:ssn.email} 
    var newTime = {$set:{  
                          fName:ssn.fName,
                          lName:ssn.lName,
                          grade:ssn.grade,
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
    dbo.collection("students").updateOne(query,newTime, function(err,res){
      if (err) throw err;
      console.log(res.insertedCount +" Docs");
      db.close();
    });
  });
  req.session.destroy();  
  res.redirect('/login');
});


module.exports = router;
