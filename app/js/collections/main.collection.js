;(function (){

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'lastName',

    url: myendpoint



  });

  app.Collections.Posts = Backbone.Collection.extend({

    model: app.Models.Post,

    url: postendpoint

  });


  app.Collections.Guesses = Backbone.Collection.extend({

    model: app.Models.Guess,

    comparator: 'guesses',

    url: thirdendpoint
  });

}());
