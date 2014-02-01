/***************************************
	collection of book | library.js
****************************************/
define(['models/book'],function(){
	
	var Library =  Backbone.Collection.extend({
		model: require('models/book'),
		//Fetch from restful API
		url: '/api/books',
		
		initialize: function() {
		 console.log("--> Entering the book collection a.k.a Library");
		},
		
		addNewItem: function(book){
			this.add(book);
		},
		
		createNewBook: function(book){
			console.log("Creating a new book");
			this.create(book);
		}
	});
	
	
//	var books = [
//        { title: 'JavaScript: The Good Parts', author: 'Douglas Crockford', releaseDate: '2008', keywords: 'JavaScript Programming' },
//        { title: 'The Little Book on CoffeeScript', author: 'Alex MacCaw', releaseDate: '2012', keywords: 'CoffeeScript Programming' },
//        { title: 'Scala for the Impatient', author: 'Cay S. Horstmann', releaseDate: '2012', keywords: 'Scala Programming' },
//        { title: 'American Psycho', author: 'Bret Easton Ellis', releaseDate: '1991', keywords: 'Novel Splatter' },
//        { title: 'Eloquent JavaScript', author: 'Marijn Haverbeke', releaseDate: '2011', keywords: 'JavaScript Programming' }
//    ];


	var libraryInstance = new Library();
	return libraryInstance;
});