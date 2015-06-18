;(function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: "main",

    events: {

      "submit #login-form" : "loginUser",
      "submit #register-form" : "registerUser"

    },

    template: hbs.main, // main = template for login/register page

    initialize: function(options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function(){
      this.$el.html(this.template)
    },
    registerUser: function(event) {

      event.preventDefault();

      //registration form values
      var self = this, form = $(event.target),
          user_name = form.find('#new-username').val(),
          full_name = form.find('#new-name').val(),
          email = form.find('#new-email').val();

          //password verify function
      var password = function() {

        var intended = form.find('#new-pwd').val(),
            verify = form.find('#ver-pwd').val();

        if (intended == verify) {
          return intended;
        } else {
          $('.pwError').html('Your passwords do not match.');
        };
      }


      //create user instance on registration
      var u = new app.Models.User({

        user_name : user_name,
        password : password,
        full_name : full_name,
        email : email

      });

      //add instance to collection and push to database
      this.collection.add(u).save().success( function() {
        self.render();
      });

    }

  });

}());
