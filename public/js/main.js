var logSignInfo = require('../html/login.html');

window.onload();

$('#login').on('click', function(){
	 myFunction();
})

function myFunction() {
    var myWindow = window.open("../html/login.html", "", "width=100","height=100");
}

function myFunction2() {
    var myWindow2 = window.close()
}
// -----code pulled from uer.js file from the passport example from ari-------------------------------------------------------------------------

function User (userObj) {
	logSignInfo.providerdata.uid = userObj.username
	console.log(providerdata)
	// this.username = userObj.username
	// this.password = userObj.password
}

module.exports = User

module.exports.saveUser = function(userObj, callback){
	logSignInfo.addUserToDB(userObj, function(status, err){
		if (err) return callback(false);
		callback(true);
	});
}
// -----code pulled from orm.js file from passport example from ari------------------------------------------------------------------------------------------
// not yet adjusted
var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: process.argv[2],
	database: 'dbUsers'
});

function connectToDB(){
	connection.connect(function(err){
		if (err) {
			console.error('error connection:', err.stack);
			return
		}
		console.log('connected to MySQL DB')
	});
}

module.exports.connectToDB = connectToDB;

function addUserToDB(userObj, callback){
	connection.query('INSERT INTO tblUsers SET ?', userObj, function(err, results){
		if (err) return callback(false, err)
		callback(true. null)
	});
}

module.exports.addUserToDB = addUserToDB;

function findUser(username, callback){
	connection.query('SELECT * FROM tblUsers WHERE ?', {username: username}, function(err, user){
		callback(err, user)
	})
}
module.exports.findUser = findUser;