;(function (){

  'use strict';

    app.Models.Guess = Backbone.Model.extend({

    idAttribute: "_id", // in case of MongoDB syntax

    defaults: {

      username: "",
      guesses: 0

    }

  });

}());
