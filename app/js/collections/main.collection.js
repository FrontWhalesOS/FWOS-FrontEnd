;(function (){

  'use strict';

  app.Collections.Users = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'lastName',

    // url: 'https://morning-sands-1943.herokuapp.com/users/'
    url: myendpoint

  });

}());
