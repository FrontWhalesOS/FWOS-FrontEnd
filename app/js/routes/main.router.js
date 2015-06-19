;(function (){

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};

      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
    },

    routes: {

      '' : 'homePage',
      'dashboard' : 'dashboardPage',
      'scores' : 'scoresPage',
      'about' : 'aboutPage',
      'guess' : 'guessPage',
      ':user_name' : 'profilePage',
      ':user_name/photos' : 'userPhotos',
      '*path' : 'errorPage'

    },
    dashboardPage: function(){
      new app.Views.Dashboard({

        collectionUsers: this.collectionUsers,
        collectionPosts: this.collectionPosts

      });
    },
    scoresPage: function(){
      new app.Views.Scoreboard({

        collectionUsers : this.collectionUsers // will probably be guesses later on

      });
    },

    aboutPage: function() {
      new app.Views.About();
    },

    homePage: function() {
      new app.Views.Main({

        collectionUsers : this.collectionUsers

      });
    },

    guessPage: function(){
      new app.Views.Guess({
        collectionPosts: this.collectionPosts // will change to guesses
      })
    },

    profilePage: function(){
      new app.Views.User({

        collectionUsers: this.collectionUsers

      });

    },

    errorPage: function() {
      $('.container').html('404 Not Found');
    }



  });
}());
