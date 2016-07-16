
var connection = require('../config/connection.js');
//var path = require('path');
var orm = require('../config/orm.js');
// ===============================================================================
// ROUTING
// ===============================================================================
var path = require('path');





module.exports = function(app){



//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// html-routes

//////////////////////////////////////////////////////////////////////////////////////////

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------
	
app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});

app.get('/index', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});

app.get('/signup', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/signup.html'));
	});

app.get('/page2', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/page2.html'));
	});

app.get('/page3', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/page3.html'));
	});

app.get('/page4', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/page4.html'));
	});

app.get('/page5', function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/page5.html'));
	});

app.use(function(req, res){
		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
	});
//////////////////////////////////////////////////////////////////////////////////

// api-routes

//////////////////////////////////////////////////////////////////////////////////////////


	app.post('/update/:id', function (req, res) {
		    //connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.params.id]);            
            orm.updateOne('burgers', 'devoured', req.params.id,  function(result){
            	res.redirect('/index');
 			});
    });// end  app.post (update)
		    		
	
	app.post('/create', function (req, res) {
		    
		    console.log('burgername: ' + req.body.burgName);
		    //connection.query('INSERT INTO burgers (burger_name, devoured, date) VALUES (?, false, now())', [req.body.burgName]);
		    orm.insertOne('burgers', req.body.burgName, function(result){			    
			    res.redirect('/index'); 
		    });
	}); // end  app.post (create)


}; // end module.exports
