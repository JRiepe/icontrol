
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
		//res.render('index');
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

app.get('/test', function (req, res) {
		    //connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.params.id]);            
            //console.log('test worked' + req.body)
            //res.redirect('/');
            //console.log('test from test is: '+ mRPInput);
            res.sendFile(path.join(__dirname + '/../public/html/test.html'));
    });// end  app.post (update) 

//app.use(function(req, res){
//		res.sendFile(path.join(__dirname + '/../public/html/index.html'));
//	});
//////////////////////////////////////////////////////////////////////////////////

// api-routes

//////////////////////////////////////////////////////////////////////////////////////////

	


	app.post('/update/:id', function (req, res) {
		    //connection.query('UPDATE burgers SET devoured = ? WHERE id = ?', [true, req.params.id]);            
            //orm.updateOne('owners', 'devoured', req.params.id,  function(result){
            	
            	//res.render('/page3');
 			//});
    });// end  app.post (update)
		    		
	
	app.post('/create', function (req, res) {
		    //var mRPInput = document.getElementById("myForm").elements.namedItem("mRPInput").value;
		    console.log('test is: ' + req.body.mRPInput);
		    //res.redirect('/test');
		    
		    //res.sendFile(path.join(__dirname + '/../public/html/test.html'));
		    
			/*orm.insertOne('inventory', req.body.nameInput, req.body.descriptionInput, req.body.groupInput, req.body.wholeSaleInput,req.body.retailPriceInput, req.body.inStockInput, req.body.mRPInput, function(result){			    
						    res.redirect('/page2'); 
		    }); */
			res.redirect('/page2')

	}); // end  app.post (create)


}; // end module.exports
