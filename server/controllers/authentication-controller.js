var mongoose = require('mongoose');
var User = require('../datasets/users');

module.exports.signup = function(req,res){ 
  console.log("controller ...");
  var user = new User(req.body);
  user.save();
  console.log('saved in DB');
  res.json(req.body);
}

module.exports.login = function(req,res){
    console.log(req.body);
    User.find(req.body,function(err,results){
      console.log("inside user find");
      if (err){ console.log("User not found in DB"); }
      else{
        
        console.log("else part");
        if( results &&  results.length === 1 ){
          console.log("post controller for login");
          res.json(req.body.email);
        }
        else{
          console.log("galt hau");
        }
        
      }

    })
}