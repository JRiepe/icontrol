//psudocode and stuff


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

}); //ends document.onready function