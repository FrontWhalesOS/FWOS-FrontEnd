this["hbs"] = this["hbs"] || {};
this["hbs"]["dashboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper;

  return "  <li><a href=\"\"><img src=\""
    + this.escapeExpression(((helper = (helper = helpers['?img?'] || (depth0 != null ? depth0['?img?'] : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"?img?","hash":{},"data":data}) : helper)))
    + "\"></a></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n      <td>"
    + alias3(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user","hash":{},"data":data}) : helper)))
    + "</td>\n      <td>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<ul class=\"main-pics\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['??'] : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</ul>\n\n\n<table class=\"score-dash\">\n  <thead>\n    <tr>\n      <th width=\"200\">Player</th>\n      <th width=\"150\">Score</th>\n    </tr>\n  </thead>\n  <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0['??'] : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </tbody>\n</table>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["guess"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<main class = \"front row\">\n\n  <h3 class = \"loginHead\">Log In</h3>\n\n  <div class=\"small-8 columns loginWrap\">\n\n    <section>\n      <form>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Username:</p>\n        <input type=\"text\" id=\"login-user\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Password:</p>\n        <input type=\"password\" id=\"login-pwd\" class=\"connectInput\"></div>\n\n        <button class=\"alert\">Login</button>\n      </form>\n    </section>\n  </div>\n\n\n  <h3 class = \"regHead\">New User</h3>\n\n  <div class=\"small-8 columns newUserWrap\">\n\n    <section>\n      <form>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Name:</p>\n        <input type=\"text\" id=\"new-name\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Email:</p>\n        <input type=\"text\" id=\"new-email\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Username:</p>\n        <input type=\"password\" id=\"new-username\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Password:</p>\n        <input type=\"password\" id=\"new-pwd\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Confirm Password:</p>\n        <input type=\"text\" id=\"ver-pwd\" class=\"connectInput\"></div>\n\n        <div class='pwError row'></div>\n\n        <button class=\"alert\">Sign&nbsp;Me&nbsp;Up</button>\n\n      </form>\n\n    </section>\n  </div>\n</main>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["scoreboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n      <td>"
    + alias3(((helper = (helper = helpers.user || (depth0 != null ? depth0.user : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"user","hash":{},"data":data}) : helper)))
    + "</td>\n      <td>"
    + alias3(((helper = (helper = helpers.score || (depth0 != null ? depth0.score : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"score","hash":{},"data":data}) : helper)))
    + "</td>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<table class=\"score-main\">\n  <thead>\n    <tr>\n      <th width=\"200\">Player</th>\n      <th width=\"150\">Score</th>\n    </tr>\n  </thead>\n  <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </tbody>\n</table>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["submit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});