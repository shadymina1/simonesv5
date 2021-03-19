var express = require('express');
var router = express.Router();
var ssn; // we have declare ssn everytime dealing with session!!
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shadymina:niceclass@cluster0.8z6e8.mongodb.net/<dbname>?retryWrites=true&w=majority";
/* GET home page. */
router.get('/', function(req, res, next) {
  ssn = req.session; 
  res.render('login', { title: "Simone's Academy" });
});
router.post('/', function(req, res, next) {
  console.log('======-myTest-1-====');//testing
  ssn = req.session;
  ssn.email=req.body.email;
  ssn.pass=req.body.pass;
  console.log(ssn.email +"  - "+ssn.pass  ); //testing
  MongoClient.connect(url, function(err,db){
    console.log('======-myTest-2-====');
    if(err)throw err;
    var dbo = db.db ("Simones");
    var query= {$and:[{email:ssn.email},{pass:ssn.pass}]};
    console.log("=======query:"+query + " ssn.email :"+ ssn.email+ " ========="); // testing
    dbo.collection("accounts").findOne(query,( function (err,result){
      console.log("=============connected to accounts");//testing
      console.log( "============ results :"+ result);//testing

      if(err) throw err;
      if(result){
        console.log('======-myTest-3-FOUND accounts====');
        var query1={email:ssn.email}; // >>>> $and should be added for fName 
        dbo.collection("students").findOne(query1,( function (err,result1){
          if(err) throw err;
          if(result1){
            console.log('======-Big-Test-4-FOUND student====');
            console.log(result1);
            gradeRange=result1.grade;
            switch(gradeRange){
              case'a':
              ssn.grade=" 1 to 3";
              break;
              case'b':
              ssn.grade=" 4 to 7";
              break;
              case'c':
              ssn.grade=" 7 to 9";
              break;
            }
            ssn.fName=result1.fName;
            ssn.lName=result1.lName;
            ssn.sun3=result1.sun3;
            ssn.mon3=result1.mon3;
            ssn.tue3=result1.tue3;
            ssn.wed3=result1.wed3;
            ssn.thu3=result1.thu3;
            ssn.fri3=result1.fri3;
            ssn.sat3=result1.sat3;
            ssn.sun4=result1.sun4;
            ssn.mon4=result1.mon4;
            ssn.tue4=result1.tue4;
            ssn.wed4=result1.wed4;
            ssn.thu4=result1.thu4;
            ssn.fri4=result1.fri4;
            ssn.sat4=result1.sat4;
            ssn.sun5=result1.sun5;
            ssn.mon5=result1.mon5;
            ssn.tue5=result1.tue5;
            ssn.wed5=result1.wed5;
            ssn.thu5=result1.thu5;
            ssn.fri5=result1.fri5;
            ssn.sat5=result1.sat5;
            ssn.sun6=result1.sun6;
            ssn.mon6=result1.mon6;
            ssn.tue6=result1.tue6;
            ssn.wed6=result1.wed6;
            ssn.thu6=result1.thu6;
            ssn.fri6=result1.fri6;
            ssn.sat6=result1.sat6;
            ssn.sun7=result1.sun7;
            ssn.mon7=result1.mon7;
            ssn.tue7=result1.tue7;
            ssn.wed7=result1.wed7;
            ssn.thu7=result1.thu7;
            ssn.fri7=result1.fri7;
            ssn.sat7=result1.sat7;
            ssn.sun8=result1.sun8;
            ssn.mon8=result1.mon8;
            ssn.tue8=result1.tue8;
            ssn.wed8=result1.wed8;
            ssn.thu8=result1.thu8;
            ssn.fri8=result1.fri8;
            ssn.sat8=result1.sat8;
            db.close();
            res.redirect('/profileStudent')
          }else{ ///need be changed to be maching the kid fName
            console.log('======-myTest-5-====');
            db.close();
            console.log('======-myTest-6-====');
            res.render('login', { title: "Simone's Academy",
            wrong:'Wrong email or passowrd \n try again or',
            erollNow:'enroll with  a new email now'});
            req.session.destroy();
            console.log('======-myTest-7-====');
          }
        }));
      }else{
        console.log('======-myTest-8-====');
        db.close();
        console.log('======-myTest-9-====');
        res.render('login', { title: "Simone's Academy",
        wrong:'Wrong email or passowrd \n try again or',
        erollNow:'enroll with  a new email now'});
        req.session.destroy();
        console.log('======-myTest-10-====');
      }
    }));
  });
});

module.exports = router;
