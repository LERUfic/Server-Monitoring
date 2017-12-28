var express = require('express');
var app = express();
var middleware = require('../middleware/auth.js')
var connection = require('../database/db.js');

var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({
  secret: 'buayakecil',
  resave: false,
  saveUninitialized: true
}));


app.get('/dashboard',middleware.checkAuth, function(req,res){
  res.render('index');
});
app.get('/', function(req,res,next){
  res.render('login');
});

/* Register request for input Start*/
app.post('/register', function(req,res,next){
  var input = JSON.parse(JSON.stringify(req.body));
  var data = {
    user_NRP      : input.nrp,
    user_nama     : input.nama,
    user_password : input.password,
    user_admin    : 0
  };

  req.getConnection(function(err,connection){
    connection.query("INSERT INTO tblUser set ?",[data], function(err, rows){
      if(err) console.log("Error Input User Baru : %s".err);
      res.redirect('/');
    });
  });
});
/* Register request for input End*/

/* Login Request Start*/
app.post('/login', function(req,res){
  /*var input = JSON.parse(JSON.stringify(req.body));
  var dataNRP = input.nrp;
  var datapassword = input.password;*/

  var post = req.body;
  if(post.nrp === '5116100056' && post.password === 'samaaja'){
    req.session.nrp = '5116100056';
    console.log(req.session.nrp);
    res.redirect('/dashboard');
  }
  else{
    res.redirect('/');
  }

});
/* Login Request End*/

module.exports = app;
