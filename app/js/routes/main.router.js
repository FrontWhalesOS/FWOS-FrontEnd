;(function (){ // routers

  'use strict';

  app.Routers.MainRouter = Backbone.Router.extend({

    initialize: function(options) {

      var args = options || {};

      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionGuesses = args.collectionGuesses;

    },

    routes: {

      '' : 'homePage',
      'dashboard' : 'dashboardPage',
      'scores' : 'scoresPage',
      'about' : 'aboutPage',
      'guess' : 'guessPage',
      'answer' : 'answerPage',
      'pic/:id' : 'chosenPic',
      ':user_name' : 'profilePage',
      ':user_name/photos' : 'userPhotos',
      '*path' : 'errorPage'

    },
    dashboardPage: function(){
      new app.Views.Dashboard({

        collectionUsers: this.collectionUsers,
        collectionPosts: this.collectionPosts,
        collectionGuesses: this.collectionGuesses

      });
    },
    scoresPage: function(){
      new app.Views.Scoreboard({

        collectionGuesses : this.collectionGuesses // will probably be guesses later on

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
        collectionPosts: this.collectionPosts,
        collectionGuesses: this.collectionGuesses
      })
    },

    chosenPic: function(id){

      new app.Views.ChosenPic({
        singleId: id,
        collectionPosts: this.collectionPosts,
        collectionGuesses: this.collectionGuesses
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
