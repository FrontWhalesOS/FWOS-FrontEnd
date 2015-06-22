this["hbs"] = this["hbs"] || {};
this["hbs"]["about"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<div class=\"aboutWrap row \">\n  <h3 class=\"aboutHead\">About Page</h3>\n\n  <p class=\"small-12 columns\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n\n  <p class=\"small-12 columns\">Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod\n  tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,\n  quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo\n  consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse\n  cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non\n  proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["chosen"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "  <span class=\"userLabelInline\">"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</span>\n  <img id =\"chosen-image\" data-id=\""
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\" src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\">\n";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <div class=\"guessBtnWrap\"><a href=\"#answer\" data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" class=\"connectInput small-9 columns button alert\" id=\"guess-btn\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.image_name : stack1), depth0))
    + "</a></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n\n\n<div class=\"imgWrap\">\n    <span class=\"userLabel\"><i>posted&nbsp;by&nbsp;</i></span>\n\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "</div>\n\n<main class = \"guessContainer row\">\n\n  <h3>What's your guess?</h3>\n\n  <div class=\"small-12 columns guessWrap\">\n\n    <section>\n      <form>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guesses : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </form>\n    </section>\n\n  </div>\n\n</main>\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["dashboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <li class=\"dashImgWrap\" id=\"dash-img-wrap\"><a href=\"#\" class=\"usernameOverlay hidden\" id=\"dash-img-overlay\"><i>posted&nbsp;by&nbsp;</i>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</a><a href=\"#pic/"
    + alias3(((helper = (helper = helpers._id || (depth0 != null ? depth0._id : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"_id","hash":{},"data":data}) : helper)))
    + "\"><img src=\""
    + alias3(((helper = (helper = helpers.image_url || (depth0 != null ? depth0.image_url : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"image_url","hash":{},"data":data}) : helper)))
    + "\" class = \"dashImg\"></a></li>\n";
},"3":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "      <tr>\n        <td>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</td>\n        <td>"
    + alias3(((helper = (helper = helpers.guesses || (depth0 != null ? depth0.guesses : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"guesses","hash":{},"data":data}) : helper)))
    + "</td>\n      <tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"dashWrapper\" id=\"dash-wrapper\">\n\n  <ul class=\"mainPics\">\n\n    <h3>User Photos</h3>\n\n    <div class = \"allDashImgWrap\" id =\"all-dash-img-wrap\">\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.post : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </div>\n  </ul>\n\n\n  <table class=\"scoreDash\">\n    <thead>\n      <tr>\n        <th width=\"200\">Player</th>\n        <th width=\"150\">Score</th>\n      </tr>\n    </thead>\n    <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guess : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "    </tbody>\n  </table>\n\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["example"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<h1>\n  "
    + this.escapeExpression(((helper = (helper = helpers.value || (depth0 != null ? depth0.value : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"value","hash":{},"data":data}) : helper)))
    + "\n</h1>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["guess"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    return "";
},"3":function(depth0,helpers,partials,data) {
    var stack1, alias1=this.lambda, alias2=this.escapeExpression;

  return "        <div class=\"guessBtnWrap\"><a  data-id=\""
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1._id : stack1), depth0))
    + "\" class=\"connectInput small-9 columns button alert\" id=\"guess-btn\">"
    + alias2(alias1(((stack1 = (depth0 != null ? depth0.attributes : depth0)) != null ? stack1.image_name : stack1), depth0))
    + "</a></div>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n\n<div class = row>\n\n  <div class=\"imgWrap small-12 columns\">\n"
    + ((stack1 = (helpers.rand || (depth0 && depth0.rand) || helpers.helperMissing).call(depth0,(depth0 != null ? depth0.guesses : depth0),{"name":"rand","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </div>\n\n</div>\n\n<div class = \"guessContainer row\">\n\n  <h3>What's your guess?</h3>\n\n  <div class=\"small-12 columns guessWrap\">\n\n    <section>\n      <form>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guesses : depth0),{"name":"each","hash":{},"fn":this.program(3, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "      </form>\n    </section>\n\n  </div>\n\n</div>\n\n\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["main"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "\n<main class = \"front row\">\n\n  <h3 class = \"loginHead\" id=\"login-head\">Log In</h3>\n  <div class=\"alert alert-error\" style=\"display:none;\">\n</div>\n\n  <div class=\"small-8 columns loginWrap\" id=\"login-wrap\">\n\n    <section class =\"loginFormContent\">\n      <form id=\"login-form\">\n        <div class=\"alert alert-error\" style=\"display:none;\">\n        </div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Username:</p>\n        <input type=\"text\" id=\"login-user\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Password:</p>\n        <input type=\"password\" id=\"login-pwd\" class=\"connectInput\"></div>\n\n        <button class=\"alert\">Login</button>\n      </form>\n    </section>\n  </div>\n\n\n  <h3 class = \"regHead\" id=\"reg-head\">New User</h3>\n\n  <div class=\"small-8 columns newUserWrap\">\n\n    <section>\n      <form id=\"register-form\" class = \"regForm\">\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Name:</p>\n        <input type=\"text\" id=\"new-name\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Email:</p>\n        <input type=\"text\" id=\"new-email\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Username:</p>\n        <input type=\"text\" id=\"new-username\" class=\"connectInput\"></div>\n        <div class=\"inputWrap row\"><p class=\"connectInput small-4 columns\">Password:</p>\n        <input type=\"password\" id=\"new-pwd\" class=\"connectInput\"></div>\n\n        <button class=\"alert\">Sign&nbsp;Me&nbsp;Up</button>\n\n      </form>\n\n    </section>\n  </div>\n</main>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["scoreboard"] = Handlebars.template({"1":function(depth0,helpers,partials,data) {
    var helper, alias1=helpers.helperMissing, alias2="function", alias3=this.escapeExpression;

  return "    <tr>\n      <td>"
    + alias3(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</td>\n      <td>"
    + alias3(((helper = (helper = helpers.guesses || (depth0 != null ? depth0.guesses : depth0)) != null ? helper : alias1),(typeof helper === alias2 ? helper.call(depth0,{"name":"guesses","hash":{},"data":data}) : helper)))
    + "</td>\n    </tr>\n";
},"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var stack1;

  return "\n<div class=\"scoreboardMain row\">\n  <table>\n  <thead>\n    <tr>\n      <th class=\"\">Player</th>\n      <th class=\"\">Score</th>\n    </tr>\n  </thead>\n\n  <tbody>\n"
    + ((stack1 = helpers.each.call(depth0,(depth0 != null ? depth0.guess : depth0),{"name":"each","hash":{},"fn":this.program(1, data, 0),"inverse":this.noop,"data":data})) != null ? stack1 : "")
    + "  </tbody>\n  </table>\n</div>\n";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["submit"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    return "";
},"useData":true});
this["hbs"] = this["hbs"] || {};
this["hbs"]["user"] = Handlebars.template({"compiler":[6,">= 2.0.0-beta.1"],"main":function(depth0,helpers,partials,data) {
    var helper;

  return "<div class=\"row\">\n  <h3>"
    + this.escapeExpression(((helper = (helper = helpers.username || (depth0 != null ? depth0.username : depth0)) != null ? helper : helpers.helperMissing),(typeof helper === "function" ? helper.call(depth0,{"name":"username","hash":{},"data":data}) : helper)))
    + "</h3>\n</div>\n";
},"useData":true});