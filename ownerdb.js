
//INITIALIZES THE NPM PACKAGES USED//
var mysql=require('mysql');
var inquirer=require('inquirer');

//INITIALIZES THE CONNECTION VARIABLE TO SYNC WITH A MYSQL DATABASE//
var connection=mysql.createConnection({
	host:"localhost",
	port: process.env.PORT || 8080,
	user:"root", //Your username//
	password: process.argv[2], //Your password//
	database:"owner_db"})

//CREATES THE CONNECTION WITH THE SERVER AND MAKES THE TABLE UPON SUCCESSFUL CONNECTION//
connection.connect(function(err){
	if(err){
		console.error("error connecting: "+err.stack);}
	promptOwner();})


//FUNCTION CONTAINING ALL CUSTOMER PROMPTS//
var promptOwner=function(res){
	//PROMPTS OWNER FOR THEIR INFO//
	inquirer.prompt([
		{type:'input',
		name:'username',
		message:'Input the Username you would like to use:'}]).then(function(val){
		//SET THE VAR correct TO FALSE SO AS TO MAKE SURE THE USER INPUTS A VALID PRODUCT NAME//
		var correct=false;
		//CHECKS owner_db to verify Username has not been used//
		connection.query("SELECT owners WHERE ownUser ="+username);
		})