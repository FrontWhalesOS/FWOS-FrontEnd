;(function (){

  'use strict';

  app.Views.Guess = Backbone.View.extend({

    className: "guess",

    events: {
      "click #guess-btn" : "executeGuess"
    },

    template: hbs.guess,

    initialize: function(options) {

      var args = options || {},
          self = this;

      this.collectionPosts = args.collectionPosts;
      this.collectionGuesses = args.collectionGuesses;

      this.collectionGuesses.fetch();
      this.collectionPosts.fetch().success (function() {
        self.render();
      });

      $('.container').html(this.el);

    },


    render: function(){
      // this.$el.html(this.template({ post: this.collectionPosts.toJSON() }));

      var guesses = this.getRandomSet();

      this.$el.html(this.template({guesses : guesses}));
    },

    getRandomSet: function() {
      return this.collectionPosts.sample(4);
    },

    executeGuess: function(event) {
      var guess = $(event.target);
      var guess_id = $(event.target).attr('data-id');
      var img_id = $('#random-image').attr('data-id');
      var user = Cookies.get('username');
      var self = this;

      if (guess_id == img_id) {

        $('.guessWrap').html(" ");
        $('.guessWrap').append("<div class='response' id='guess-response'>You are wise.  Your score has increased.</div>" +
                                "<a class='connectInput small-9 columns button alert' href='#guess' onClick='window.location.reload(true);'>Try once more</a>");
        $('#guess-response').fadeIn(1500);

        this.collectionGuesses.fetch().success(function() {
         _.detect(self.collectionGuesses, function() {
           if (self.username == user) {
             console.log("LOGGED IN FOUND");
           } else {
             console.log("on the right track");
           }
         })
       });

      } else if (guess_id !== img_id){
        $('.guessWrap').html("");
        $('.guessWrap').append("<div class='response' id='guess-response'>Your choice was less than wise. Your score has not increased.</div>" +
                               "<a class='connectInput small-9 columns button alert' href='#guess' onClick='window.location.reload(true);'>Try once more</a>");
        $('#guess-response').fadeIn(1500);
      }

    }



  });

}());
