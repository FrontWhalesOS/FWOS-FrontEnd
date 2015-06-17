;(function (){

  'use strict';

  app.Collections.Contacts = Backbone.Collection.extend({

    model: app.Models.User,

    comparator: 'lastName',

    url: app.rootURL

  });

}());
