
var connection = require('../config/connection.js');
//var path = require('path');
var orm = require('../config/orm.js');
// ===============================================================================
// ROUTING
// ===============================================================================






module.exports = function(app){




//////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////

// html-routes

//////////////////////////////////////////////////////////////////////////////////////////

	// HTML GET Requests
	// Below code handles when users "visit" a page. 
	// In each of the below cases the user is shown an HTML page of content
	// ---------------------------------------------------------------------------
	app.get('/index', function (req, res) {
	 		//orm.selectAll()
	 	connection.query('SELECT * FROM burgers', function(err, result) {
            
            if (err) throw err;
            res.render('index', {
            	burgers: result
            });

        });
	    	//orm.selectAll('burgers', function(req, res) {
				
	
	}); // end  app.get

app.get('/', function(req, res){
		res.sendFile(path.join(__dirname + '/index.html'));
	});


	/* app.use(function(req, res){
			orm.selectAll('burgers');
	        console.log("app use: " + res);
	        res.render('index', {	       
	            burgers: res    
	        }); // 2nd function always an object // end res.render	   
	}); // end  app.use */

//////////////////////////////////////////////////////////////////////////////////////////

// api-routes

//////////////////////////////////////////////////////////////////////////////////////////


	app.post('/update/:id', function (req, res) {
		    connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.params.id]);
            
            res.redirect('/index');
          
    });
		    //orm.updateOne(req.params.ident);		
		    
		    //console.log("app devours: "  + req.params.ident);
		    //res.redirect('/index'); 
	//}; // end  app.post
	
	app.post('/create', function (req, res) {
	    connection.query('INSERT INTO burgers (burger_name, devoured, date) VALUES (?, false, now())', [req.body.burgName]);

	    //orm.insertOne(req.body.burgName);
	    console.log("app createBurger: " + req.body.burgName);
	    res.redirect('/index'); 
	    
	}); // end  app.post


}; // end module.exports
