;(function (){

  'use strict';

  app.Models.User = Backbone.Model.extend({

    idAttribute: "id", // in case of MongoDB syntax

    defaults: {

      user_name: "",
      password: "",
      full_name: "",
      email: "" // still looking for possible user_id, user_token

    }

  });
}());
