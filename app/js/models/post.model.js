;(function (){

  'use strict';

    app.Models.Post = Backbone.Model.extend({

    idAttribute: "_id", // in case of MongoDB syntax

    defaults: {

      username: "",
      image_url: "",
      image_name: "" // still looking for possible user_id, user_token

    }

  });

}());
