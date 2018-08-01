 var http = require("http");
 var express = require("express");
 var app = express();
 
 var server = http.Server(app);
 var bodyParser = require('body-parser');
 
 var mongo=require("mongodb");
 var db, uri = "mongodb://"+"classwork5-venomousabid.c9users.io/email";
 ///uri ="mongodb://"+"classwork5-venomousabid.c9users.io/email"
/*
 mongo.MongoClient.connect(uri, 
    {useNewUrlParser: true}, 
    function(err, client){
        if(err){
            console.log("could not connect to MongoDB");
           } else {
                db =client.db('simple-node');
            }
        }
     
 });
 
 var save =function(form_dat){
     db.createCollection('users',function(err,collection{}));
     var collection=db.collection('users');
     collection.save(form_data);
 }
 */
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:false}));
 
 
 app.get('/', function(req, res){
     res.sendFile(__dirname+'/index.html');
 
 });
 
 app.get('/email', function(req, res){
     res.sendFile(__dirname+'/email.html');
 
 });
 
app.post('/submit_user', function(req, res) {
 
   console.log(req.body);
  // save(req,body);
   res.save('req,body');
     
});
 
 server.listen(process.env.PORT, process.env.IP, function(){
     console.log("server Running");
     
     
 });
