var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var multipart = require('connect-multiparty');
var multipartMiddleware = multipart();

var app = express();

app.use(bodyParser.json());
var authenticationController = require('./server/controllers/authentication-controller');
var profileController = require('./server/controllers/profile-controller');

mongoose.connect('mongodb://localhost:27017/time-waste');
console.log("DB connected");
app.use('/app',express.static(__dirname + "/app"));
app.use(multipartMiddleware);

app.use('/node_modules',express.static(__dirname + "/node_modules"));

app.get('/',function(req,res){
  res.sendfile('index.html');
});


app.post('/api/user/signup', authenticationController.signup);
app.post('/api/user/login', authenticationController.login);
app.post('/api/profile/editPhoto', multipartMiddleware, profileController.updatePhoto);


app.listen('3000',function(){
	console.log("listening at port 3000...");
});
