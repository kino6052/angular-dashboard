var path            = require('path');
var express         = require('express');
var bodyParser      = require('body-parser');
var methodOverride  = require('method-override');
var csrf            = require('csurf');
var cookieParser    = require('cookie-parser');
var session         = require('express-session');
var compress        = require('compression');
var helmet          = require('helmet');
var app             = express();
var passport        = require('passport');
var config          = require('./config.json');

app.disable('x-powered-by');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(helmet());
app.use(cookieParser());
app.use(methodOverride());
app.use(session(config.express.sessions));
app.use(csrf());
app.use(compress());
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, '../dist')));

module.exports = app