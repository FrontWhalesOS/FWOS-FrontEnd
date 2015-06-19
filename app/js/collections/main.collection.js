;(function (){

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'lastName',

    url: 'https://morning-sands-1943.herokuapp.com/users/2'


  });

  app.Collections.Posts = Backbone.Collection.extend({

    model: app.Models.Post,

    url: postendpoint

  });

}());
