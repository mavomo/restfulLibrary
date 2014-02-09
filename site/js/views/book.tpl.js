(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['book.tpl'] = template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression, self=this;

function program1(depth0,data) {
  
  var buffer = "", stack1;
  buffer += "\n        	";
  if (stack1 = helpers.keyword) { stack1 = stack1.call(depth0, {hash:{},data:data}); }
  else { stack1 = (depth0 && depth0.keyword); stack1 = typeof stack1 === functionType ? stack1.call(depth0, {hash:{},data:data}) : stack1; }
  buffer += escapeExpression(stack1)
    + "\n        ";
  return buffer;
  }

  buffer += "<img src=\""
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.coverImage)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "\"/>\n    <ul>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.title)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.author)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.releaseDate)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</li>\n        <li>\n        ";
  stack2 = helpers.each.call(depth0, ((stack1 = (depth0 && depth0.item)),stack1 == null || stack1 === false ? stack1 : stack1.keywords), {hash:{},inverse:self.noop,fn:self.program(1, program1, data),data:data});
  if(stack2 || stack2 === 0) { buffer += stack2; }
  buffer += "\n        </li>\n    </ul>\n<button class=\"delete\">Delete</button>";
  return buffer;
  });
})();