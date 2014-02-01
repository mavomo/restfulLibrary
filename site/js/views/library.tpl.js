(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['library.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  


  return "<form id=\"addBook\" action=\"#\">\n        <div>\n            <label for=\"coverImage\">CoverImage: </label><input id=\"coverImage\" type=\"file\" />\n            <label for=\"title\">Title: </label><input id=\"title\" type=\"text\" />\n            <label for=\"author\">Author: </label><input id=\"author\" type=\"text\" />\n            <label for=\"releaseDate\">Release date: </label><input id=\"releaseDate\" type=\"text\" />\n            <label for=\"keywords\">Keywords: </label><input id=\"keywords\" type=\"text\" />\n            <button id=\"add\">Add</button>\n        </div>\n    </form>";
  });
})();