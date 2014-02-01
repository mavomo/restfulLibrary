/*******************************************************
	Factories of a book | factories/book.js
********************************************************/

define(['views/book.tpl','models/book'], function(){

	var BookView = Backbone.View.extend({
		
		template: Handlebars.templates['book.tpl'],
		
		tagName: 'div',
		className: 'bookContainer',
		initialize: function( initialBook ){
			console.log("Entering the book factory");
			_.extend(this, _.pick(initialBook, ['bookItem']));
			this.model = this.bookItem;
		},
		
		events:{
		    'click .delete': 'deleteBook'
		},
		
  		render: function(){
  			//console.log(this.model);
  			var formattedDate = this.formatDateTime(this.model.get('releaseDate'));
  			this.model.set('releaseDate', formattedDate);
  			
			this.$el.append(this.template({
				item : this.model.toJSON()
			}));
			return this;
		},	
		
		formatDateTime : function(date){
			return $.format.date( new Date( date ), 'MMMM yyyy' );
		},
		
		deleteBook: function(){
			console.log("Delete book in progress");
			//Delete model
			this.model.destroy();
			
			// Delete view
			this.remove();
		}

	});

	return {
		buildBookView: function(bookModel){
			var viewInstance = new BookView({
				bookItem : bookModel
			});	
		return viewInstance;
	   }
	};
});