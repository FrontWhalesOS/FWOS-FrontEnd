;(function (){

  'use strict';

  app.Models.User = Backbone.Model.Extend({});

  idAttribute: "_id",

  defaults: {

    user_name: "",
    password: "",
    full_name: "",
    email: "",

  },

}());
