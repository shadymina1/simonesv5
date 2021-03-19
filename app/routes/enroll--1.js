var express = require('express');
var router = express.Router();
var ssn; // we have declare ssn everytime dealing with session!!
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

  MongoClient.connect(url, function(err,db){
    if(err) throw err;
    var dbo = db.db("Simones");
    var query= {email:ssn.email} 
    var newTime = {$set:{      }};
    dbo.collection("students").updateOne(query,newTime, function(err,res){
      if (err) throw err;
      console.log(res.insertedCount +" Docs");
      db.close();
    });
  });
  res.redirect('/payment');
});





module.exports = router;