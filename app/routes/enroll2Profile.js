var express = require('express');
var router = express.Router();
var ssn; // we have declare ssn everytime dealing with session!!
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shadymina:niceclass@cluster0.8z6e8.mongodb.net/<dbname>?retryWrites=true&w=majority";

router.get('/', function(req, res, next) {

  ssn = req.session; 
  MongoClient.connect(url, function(err,db){
    if(err)throw err;
    var dbo = db.db ("Simones");
    var query= {email:'simon_shawky@yahoo.com'}
    dbo.collection("students").findOne(query,( function (err,result){
      // if(err) throw err;
      console.log('check===================')
      console.log(result);
      db.close();
      ssn.day= result.mon3;
  }));
  res.render('enroll2Profile', { title: "Simone's Academy",mon3:ssn.day });
  });
  
});
module.exports = router;