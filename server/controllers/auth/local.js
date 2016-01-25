var express         = require('express');
var controller      = express.Router();
var models          = require('../../models');
var passport        = require('passport');

function localStrategy() {
  return passport.use(new LocalStrategy(
    function(username, password, done) {
      User.findOne({ username: username }, function (err, user) {
        if (err) { return done(err); }
        if (!user) { return done(null, false); }
        if (!user.verifyPassword(password)) { return done(null, false); }
        return done(null, user);
      });
    }
  ));
}

// middleware for google strategy
controller.use(function (req, res, next) {
  passport.use(localStrategy());
  next();
});

module.exports = controller;