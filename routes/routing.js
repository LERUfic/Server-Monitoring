var express = require('express');
var app = express();
var middleware = require('../middleware/auth.js')
var connection = require('../database/db.js');

var cookieParser = require('cookie-parser');
var session = require('express-session');
var si = require('systeminformation');

//var service = require('./service');

app.use(cookieParser());
app.use(session({
  secret: 'buayakecil',
  resave: false,
  saveUninitialized: true
}));

//ROUTING
//service routing
//app.get('/service', middleware.checkAuth, function(req,res,next){
app.get('/service', function(req,res,next){
  var result = [];
  result[0] = {
      id : "1",
      nama : "Homepage",
      domain : "https://aguelsatria.web.id",
      port : "80/443",
      folder : "/var/www/homepage",
      webserver : "Nginx - default",
      deskripsi : "Tampilan Utama Web",
      https : "1",
      active : "1"
    }
  res.render('service-list',{result: result});
});
app.get('/service/add',middleware.checkAuth, function(req,res,next){
  res.render('service-add');
});
app.get('/service/edit/:id', middleware.checkAuth, function(req,res,next){
  res.render('service-add');
});
//app.get('/getDetail/:id', middleware.checkAuth, function(req,res,next){
app.post('/getDetail/:id', function(req,res,next){
  result = {
      id : "1",
      nama : "Homepage",
      domain : "https://aguelsatria.web.id",
      port : "80/443",
      folder : "/var/www/homepage",
      webserver : "Nginx - default",
      deskripsi : "Tampilan Utama Web",
      https : "1",
      active : "1"
    }

    res.json(result);
});
// app.get('/admin/add', service.add);
// app.post('/admin/add', service.save);
// app.post('/admin/delete/:soal_id', service.delete);
// app.get('/admin/edit/:soal_id', service.edit);
// app.post('/admin/edit/:soal_id', service.save_edit);

app.get('/dashboard',middleware.checkAuth, function(req,res,next){
  res.render('dashboard');
});
app.get('/',middleware.checkHome, function(req,res,next){
  res.render('login');
});
app.get('/system',middleware.checkAuth, function(req,res,next){
  res.render('blank');
});
//app.get('/system',middleware.checkHome, function(req,res,next){
app.post('/system', function(req,res){

  var statics;

  function getStatic(callback){
    si.getAllData(function(data) {
      statics = data;
      callback();
    });
  }

  function dataAssignment(callback){
    result = {
      time : statics.time,
      dataOS : statics.os,
      version : statics.versions,
      networking : statics.net,
      hdd : statics.fsSize,
      memory : statics.mem,
      cpu : statics.cpuCurrentspeed,
      cpuLoad : statics.currentLoad
    }
    callback();
  }

  getStatic(function(){
    dataAssignment(function(){
      res.json(result);
    });
  });
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
  if(post.nrp === 'aguelsatria' && post.password === 'aswijaya'){
    req.session.nrp = 'aguelsatria';
    console.log(req.session.nrp);
    res.redirect('/dashboard');
  }
  else{
    res.redirect('/');
  }

});
/* Login Request End*/

/*Logout Request Start*/
app.get('/logout',function(req,res){
  delete req.session.nrp;
  res.redirect('/');
});
/*Logout Request End*/

module.exports = app;
