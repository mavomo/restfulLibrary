/***************************************
Bootstrapping the routers of the App
****************************************/
define(['factories/library'], function(){

	var initialize = function(){
		console.log("Routing started!");
		this.view = require('factories/library').buildLibraryView();
		
//		console.log("Test output");
		console.log("$: " + typeof $);
		console.log("_: " + typeof _);
		console.log("Backbone: " + typeof Backbone);
		console.log("Bootstrap: " + typeof bootstrap);
	};
	
	return {
		initialize: initialize
	};
});
