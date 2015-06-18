;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};

      this.collection = args.collection;
    },

    routes: {

      '' : 'homePage',
      'dashboard' : 'dashboardPage',
      ':user_name' : 'profilePage',
      'guess' : 'guessPage',
      ':user_name/photos' : 'userPhotos',
      'scores' : 'scoresPage',
      'about' : 'aboutPage',
      '*path' : 'errorPage'

    },

    aboutPage: function() {

    },

    homePage: function() {
      new app.Views.Main({

        collection : this.collection

      });
    },

    errorPage: function() {
      $('.container').html('404 Not Found');
    }

  });
}());
