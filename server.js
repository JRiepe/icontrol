
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');
var path = require('path');


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
