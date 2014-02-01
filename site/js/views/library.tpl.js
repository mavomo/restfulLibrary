(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['library.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form role=\"form\" class=\"form-horizontal\" id=\"addBook\">\n   <div class=\"form-group\">\n    <label for=\"coverImage\" class=\"control-label col-xs-2\"> Cover Image</label>\n     <div class=\"col-xs-10\">\n    	<input type=\"file\" id=\"coverImage\"/> \n     </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"title\" class=\"control-label col-xs-2\"> Title</label> \n      <div class=\"col-xs-10\">\n    	<input type=\"text\" class=\"form-control\" id=\"title\"/>\n    </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"author\" class=\"control-label col-xs-2\" > Author </label> \n      <div class=\"col-xs-10\">\n    	<input type=\"text\" class=\"form-control\" id=\"author\"/>\n     </div>\n  </div>\n  <div class=\"form-group\">\n    <label for=\"releaseDate\" class=\"control-label col-xs-2\" > Release date:  </label> \n     <div class=\"col-xs-10\">\n    	<input type=\"text\" class=\"form-control\" id=\"releaseDate\"/>\n    </div>\n  </div>\n <div class=\"form-group\">\n    <label for=\"keywords\" class=\"control-label col-xs-2\"> Keywords:  </label> \n    <div class=\"col-xs-10\">\n    	<input type=\"text\" class=\"form-control\" id=\"keywords\"/>\n    </div>\n  </div>\n  \n  <div class=\"form-group\">\n            <div class=\"col-xs-offset-2 col-xs-10\">\n                <button type=\"submit\" class=\"btn btn-primary\" id=\"add\">Add</button>\n            </div>\n        </div>\n</form>\n    ";
  });
})();