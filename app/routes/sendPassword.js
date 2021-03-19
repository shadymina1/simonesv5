var express = require('express');
var router = express.Router();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://shadymina:niceclass@cluster0.8z6e8.mongodb.net/<dbname>?retryWrites=true&w=majority";
var nodemailer = require('nodemailer');
var ssn;
var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'test.shady.mina.ca@gmail.com',
    pass: 'that4TriOS'
  }
});

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('sendPassword', {title: "Simone's Academy"});
});
router.post('/', function (req, res, next) {

  recoverEmail = req.body.recoverEmail;
  MongoClient.connect(url, function (err, db) {
    if (err) throw err;
    var dbo = db.db("Simones");
    var query = {
      email: recoverEmail
    };
    dbo.collection("students").findOne(query, (function (err, result) {
      if (err) throw err;
      recoverfName = result.fName;
      recoverPass = result.pass;
      recoverEmail = result.email
      console.log(result);
      db.close();
      if (result) {
        var mailOptions = {
          from: 'test.shady.mina.ca@gmail.com',
          to: recoverEmail,
          subject: 'Your Simone\'s Academy Account ',
          text: 'Hello ' + recoverfName + '\n Your password: ' +'  '+ recoverPass};
        transporter.sendMail(mailOptions, function (err, info) {
          if (err) {
            console.log(err);
            console.log('=====Not very Bad!!========')
          } else {
            console.log('Email is already sent: ' + info.response);
          }
           res.render('sendPassword', {title: "Simone's Academy",is_session:null,sent:true});
        });
      }
    }));
  });
});
module.exports = router;