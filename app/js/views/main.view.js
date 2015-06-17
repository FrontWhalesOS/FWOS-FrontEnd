;(function (){

  'use strict';

  app.Views.Main = Backbone.View.extend({

    className: "main",

    events: {

      "submit #login-form" : "loginUser",
      "submit #register-form" : "registerUser"

    },

    template: hbs.main

  });

}());
