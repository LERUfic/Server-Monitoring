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
    if(!req.session.nrp){
      res.redirect('/');
    }
    else{
      res.header('Cache-Control','no-cache, private, no-store, must-revalidate, max-stale=0, post-check=0, pre-check=0');
        next();
    }
  },
  checkHome: function(req,res,next){
    if(!req.session.nrp){
      next();
    }
    else{
        res.redirect('/dashboard');
    }
  }
};
