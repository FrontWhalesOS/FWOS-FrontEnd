;(function (){

  'use strict';

  app.Views.ChosenPic = Backbone.View.extend({

    className: "chosen",

    events: {
      "click #guess-btn" : "executeGuess"
    },

    template: hbs.chosen,

    initialize: function(options) {

      var args = options || {},
          self = this;
          this.singleId = args.singleId;

      this.collectionPosts = args.collectionPosts;
      this.collectionGuesses = args.collectionGuesses;

      this.collectionPosts.fetch().success (function() {
        self.render();
      });

      $('.container').html(this.el);

    },


    render: function(){

      this.$el.html(this.template({ post: this.collectionPosts.toJSON() }));
      var singlePic = this.collectionPosts.get(this.singleId);
      this.$el.html(this.template(singlePic.toJSON()));

      var guesses = this.getRandomSet(3);
          guesses.push(singlePic);

      this.$el.html(this.template({ post: singlePic, guesses : guesses}));
    },

    getRandomSet: function(x) {
      return this.collectionPosts.sample(x);
    },

    executeGuess: function(event) {
      var guess = $(event.target);
      var guess_id = $(event.target).attr('data-id');
      var img_id = $('#chosen-image').attr('data-id');
      var self = this;
      var user = Cookies.get('username');

      if (guess_id == img_id) {
        $('.guessWrap').html(" ");
        $('.guessWrap').append("<div class='response' id='guess-response'>You are wise.  Your score has increased.</div>" +
                                "<a class='connectInput small-9 columns button alert' href='#guess' onClick='window.location.reload(true);'>Try once more</a>");
        $('#guess-response').fadeIn(1500);

        this.collectionGuesses.fetch().success(function() {
          // var x =self.collectionGuesses.get(user);
          // console.log(x);
        });

      } else if (guess_id !== img_id) {
        $('.guessWrap').html("");
        $('.guessWrap').append("<div class='response' id='guess-response'>Your choice was less than wise. Your score has not increased.</div>" +
                               "<a class='connectInput small-9 columns button alert' href='#guess' onClick='window.location.reload(true);'>Try once more</a>");
        $('#guess-response').fadeIn(1500);
      }
    }

  });

}());
