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
      'scores' : 'scoresPage',
      'about' : 'aboutPage',
      ':user_name' : 'profilePage',
      'guess' : 'guessPage',
      ':user_name/photos' : 'userPhotos',
      '*path' : 'errorPage'

    },
    dashboardPage: function(){
      new app.Views.Dashboard({

        collection: this.collection

      });
    },
    scoresPage: function(){
      new app.Views.Scoreboard({

        collection : this.collection

      });
    },

    aboutPage: function() {
      new app.Views.About();
    },

    homePage: function() {
      new app.Views.Main({

        collection : this.collection

      });
    },

    profilePage: function(){
      new app.Views.User({

        collection: this.collection

      });

    },

    errorPage: function() {
      $('.container').html('404 Not Found');
    }



  });
}());
