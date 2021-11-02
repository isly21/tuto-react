var MongoClient = require('mongodb').MongoClient;
var url = "mongodb://127.0.0.1:27017/mydb";

// creer une collection
/*MongoClient.connect(url, function(err, db) {
    if (err) throw err;
    var dbo = db.db("mydb");
    dbo.createCollection("customers", function(err, res) {
      if (err) throw err;
      console.log("Collection created!");
      db.close();
    });
  });*/

  // inserer des valeur
insererData = (url) => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db("mydb");


        var myobj = [
            { _id: 160, name: 'dodo'}
            ];

            dbo.collection("products").insertMany(myobj, function(err, res) {
            if (err) throw err;
            console.log(" documents inserted : "+res.insertedCount);
            db.close();
        });
    });
}

rechercherTous = (bdd = "mydb", collection = "customers") => {
    MongoClient.connect(url, function(err, db) {
        if (err) throw err;
        var dbo = db.db(bdd);
        var query = { address: /^S/ };
        dbo.collection(collection).find(query).toArray( function(err, result) {
        //dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) { // on enleve l'attribut addresse
          if (err) throw err;
          console.log(result);
          db.close();
          return result;
        });
      });
}

 // insererData(url);
 rechercherTous();