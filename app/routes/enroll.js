var express = require('express');
var router = express.Router();
var ssn; // we have declare ssn everytime dealing with session!!
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shadymina:niceclass@cluster0.8z6e8.mongodb.net/<dbname>?retryWrites=true&w=majority";

var nodemailer = require ('nodemailer'); 
var transporter = nodemailer.createTransport({  
    service: 'gmail',
    auth: {
      user: 'test.shady.mina.ca@gmail.com',
      pass: 'that4TriOS'
    }
  });


  /* GET home page. */
  router.get('/', function(req, res, next) {
    ssn = req.session; 
    res.render('enroll', { is_session:ssn.email,title: "Simone's Academy" });

  });
  router.post('/', function(req, res, next) {
    ssn = req.session; 
    //ssn.fName = req.body.fName; 
    // ssn.lName = req.body.lName; 
    ssn.pass = req.body.pass; 
    //ssn.rpass = req.body.rpass; // retyping the passored
    ssn.email = req.body.email; 
    ssn.cell = req.body.cell; 
    MongoClient.connect(url, function (err, db) {
      if (err) throw err;
      var dbo = db.db("Simones");
      var query = {email: ssn.email};
      dbo.collection("accounts").findOne(query,( function (err,result){
        if(err) throw err;
        console.log(result);
        db.close();
        if(result){ 
          console.log('======double======');
          ssn.alreadyExixst = 'The email is already rigestered'
          res.render('enroll', {is_session:null,messageToRegister:ssn.alreadyExixst});
          req.session.destroy();
        }else{
          MongoClient.connect(url, function(err,db){
            if(err) throw err;
            var dbo = db.db("Simones");
            var newAccount = { email: ssn.email , pass:ssn.pass , cell:ssn.cell };  
            dbo.collection("accounts").insertOne(newAccount, function(err,res){
              if(err) throw err;
              console.log(res.insertedCount +" Docs"); //debuging perpose
             db.close();
            });          
          });
          MongoClient.connect(url, function(err,db){
            if(err) throw err;
            var dbo = db.db("Simones");
            var newStudent = { email: ssn.email  };
            dbo.collection("students").insertOne(newStudent, function(err,res){
              if(err) throw err;
              console.log(res.insertedCount +" Docs"); //debuging perpose
              db.close();        
            });    
          });
          var mailOptions = {
            from: 'test.shady.mina.ca@gmail.com',
            to: ssn.email,
            cc: 'shady.mina.ca@gmail.com',
            subject: 'Welcome to Simone\'s Art Academy',
            text: 'Hello,' +'\n Welcome to Simone\'s Art Academy, \n Your account has been registered successfully.'
          };
          transporter.sendMail(mailOptions, function(err, info){
            if (err) {
              console.log(err);               
              console.log('=====Not very Bad!!========\n===='+errorMessage+'====\n=====Not very Bad!!========\n');
            } else {
              console.log('Email is already sent: ' + info.response);
            }
          });
          res.redirect('/enroll2');
        }
    }));
  });

});

module.exports = router;