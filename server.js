
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');


//------------------------------------------------------------------------------------------ //
 //set up passport requirements
var passport = require('passport');

// This is the file we created in step 2.
// This will configure Passport to use Auth0
var strategy = require('./setup-passport');

// Session and cookies middlewares to keep user logged in
var cookieParser = require('cookie-parser');
var session = require('express-session');

  //------------------------------------------------------------------------------------- 

/* The following commands will run every time the app gets started.*/

var app = express(); // Tells node that we are creating an "express" server
var PORT = process.env.PORT || 8080 ; // Sets an initial port. We'll use this later in our listener

// BodyParser makes it easy for our server to interpret data sent to it.
// The code below is pretty standard.
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.text());
app.use(bodyParser.json({type:'application/vnd.api+json'}));
app.use(express.static('public'));
// ================================================================================
// ROUTER
// The below points our server to a series of "route" files.
// These routes give our server a "map" of how to respond when users visit or request data from various URLs. 
// ================================================================================

require('./controllers/icontrol_controller.js')(app); 



// ==============================================================================
// LISTENER
// The below code effectively "starts" our server 
// ==============================================================================

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});



// ---------------------------------------------------------------------------------

// Handlers

app.use(cookieParser());
// See express session docs for information on the options: https://github.com/expressjs/session
app.use(session({ secret: 'qzgy9oIrlUd5jy42lXo9qlekCDI1ZO6Wj0pLwMxHYhnX94gvALQ26EcE05C2frbZ', resave: false,  saveUninitialized: false }));
...
app.use(passport.initialize());
app.use(passport.session());
...
// callbacks
// Auth0 callback handler
app.get('/callback',
  passport.authenticate('auth0', { failureRedirect: '/url-if-something-fails' }),
  function(req, res) {
    if (!req.user) {
      throw new Error('user null');
    }
    res.redirect("/user");
  });


app.get('/user', function (req, res) {
  res.render('user', {
    user: req.user
  });
});

// -----------------------------------------redirect option if user is authenticated 
// requiresLogin.js
module.exports = function(req, res, next) {
  if (!req.isAuthenticated()) {
    return res.redirect('/');
  }
  next();
}

// user.js
var requiresLogin = require('requiresLogin');

app.get('/user',
  requiresLogin,
  function (req, res) {
    res.render('user', {
      user: req.user
    });
  });
// --------------------------------------------------------------------------------------