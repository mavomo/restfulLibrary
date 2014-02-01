/***************************************
		models/book.js
****************************************/
//Declare the dependencies
define(['models/book'], function(){
	
 var BookModel = Backbone.Model.extend({
	 
	defaults: {
	    coverImage: 'img/placeholder.png',
	    title: 'No title',
	    author: 'Unknown',
	    releaseDate: 'Unknown',
	    keywords: 'None'
	},
	
	parse:function(response){
		console.log("Parsing the response");
		console.log(response);
		response.id = response._id;
	    return response;
	}
});
 
 //Returns the model as a Module available in the application
 return BookModel;
});