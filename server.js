var listen_port=50656;
var express = require('express');
var path = require("path");
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var express_validator = require('express-validator');
var app = express();
var http = require('http').Server(app);

var routes = require('./routes/routing');

app.set("views",path.join(__dirname,"views"));
app.set("view engine","ejs");
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname,"bower_components")));
app.use('/root', express.static(path.join(__dirname,"")));

app.use(favicon(path.join(__dirname, 'public/images', 'logo_blue.png')));

app.use('/', routes);


http.listen(listen_port,function(){
	console.log('listening on *: '+listen_port);
});

module.exports = app;
