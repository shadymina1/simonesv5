MongoClient.connect(url, function (err, db) {
  if (err) throw err;
  var dbo = db.db("Simones");
  var query = {email: ssn.email , fName:ssn.fName};
  dbo.collection("students").findOne(query,( function (err,result){

  }));

});

