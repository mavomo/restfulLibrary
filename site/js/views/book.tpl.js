(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['book.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.coverImage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n    <ul>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.author)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.releaseDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.keywords)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n    </ul>\n<button class=\"delete\">Delete</button>";
  return buffer;
  });
})();