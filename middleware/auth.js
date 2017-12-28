var express = require('express');
var app = express();
var cookieParser = require('cookie-parser');
var session = require('express-session');

app.use(cookieParser());
app.use(session({
  secret: 'buayakecil',
  resave: true,
  saveUninitialized: true,
}));

module.exports = {
  checkAuth: function(req,res,next){
    console.log('masuk');
    if(!req.session.nrp){
      res.redirect('/');
      console.log('sudah login');
    }
    else{
      res.header('Cache-Control','no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        next();
    }
  }
};
