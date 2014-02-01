/*******************************************************
	Factories of a library | factories/library.js
********************************************************/
define(['views/library.tpl','factories/book', 'collections/library'], function(){

	var LibraryView = Backbone.View.extend({
		
		el: '#books',
		template: Handlebars.templates['library.tpl'],

		initialize: function( initialBooks ){
			console.log("Entering the Library factory");
			
			_.extend(this, _.pick(initialBooks, ['library']));
			
			this.collection = this.library;	
			console.log("###", this.collection);
			
			//Fetching from the client -> Bad habit
			 this.collection.fetch({reset: true});
			
			this.listenTo( this.collection, 'add', this.renderBook );
			
			this.listenTo( this.collection, 'reset', this.render);			
			

		},
		
  		render: function(){
			this.$el.append(this.template({}));	
			 $( '#releaseDate' ).datepicker();
			
			var _that = this;
			_.each(this.collection.models, function ( book ) {
				_that.renderBook(book);
			 });
			return this;
		},
		
		renderBook: function( item ){
			var itemView = require('factories/book').buildBookView(item);
			this.$el.append(itemView.render().el);
		},
		
		events:{
		    'click #add': 'addNewBook'
		   },
		
		addNewBook: function( e ){
			e.preventDefault();
			console.log("adding new book!");
		    var formData = {}; 
		    var view= this;
			 $('#addBook div').children('input').each(function(i, el) {
				if ($(el).val() != '') {
					
					 if( el.id === 'keywords' ) {
			                formData[ el.id ] = [];
			                _.each( $( el ).val().split( ' ' ), function( keyword ) {
			                    formData[ el.id ].push({ 'keyword': keyword });
			                });
			            }
					 	else if(el.id==='coverImage'){
			            	formData[ el.id ] = view.updateCoverImageUrl($( el ).val());
			            }
					 
					 	else if( el.id === 'releaseDate' ) {
			                formData[ el.id ] = $( '#releaseDate' ).datepicker( 'getDate' ).getTime();
			            }
			            else {
			                formData[ el.id ] = $( el ).val();
			            }
				}	
				// Clear input field value
				$( el ).val('');
			 });
			 
			 console.log("Collection", this.collection);
			 console.log("formData ",formData);
			 
			 this.collection.create( formData );
		},
		
		updateCoverImageUrl: function(params,baseUrl){
			baseUrl="img/covers"
  			var splitTab = params.split("\\");
  			if(splitTab[1]==="fakepath"){
  				params = baseUrl+'/'+splitTab[2];
  			}
  		return params;
		}
		
		
	});

	return {
		buildLibraryView: function(){
			var viewInstance = new LibraryView({
				library : require('collections/library')
			});	
		return viewInstance;
	   }
	};
});