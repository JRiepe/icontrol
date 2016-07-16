//psudocode and stuff
//grabs the data that was sent to firebase and displays it in the table
//has an option to delete each row

//lets break this into steps 

//once the user hits submit, their information is sent into the databse.
//the user data is inputed into s generated row if the user successfully unputted their data without errors
//a new tr(table row) needs to be generated with a unique id so it can be deleted if need be
//once the user clicks the delete button in the row, it needs to delete that row by using the row id
//the user can add as many rows as they want but it needs to be linked to their unique user id


//on ready function
$(document).ready(function(){

	//function to grab data and populate a table for the user
	function iControlTable(){

		//on click to grab information from the row, send it to SQL database and clear it
		$('#sendRowButton').on('click', function() {

			// Grabs user input from each section
			var invName = $("#nameInput").val().trim();
			var invDesc = $("#desriptionInput").val().trim();
			var invGroup = $("#groupInput").val().trim();
			var invWSP =$("#wholeSaleInput").val().trim();
			var invRTP = $("#retailPriceInput").val().trim();
			var invStock = $("#inStockInput").val().trim();
			var invMRP =$("#mRPInput").val().trim();

			

		} //ends sendRowButton onclick

	}; //ends iControlTable function

}); //ends document.ready function
