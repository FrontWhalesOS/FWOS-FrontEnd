;(function (){

  'use strict';

  app.Collections.Contacts = Backbone.Collection.extend({

    model: apps.Models.User,

    comparator: 'lastName',

    url: app.rootURL

  });

}());
