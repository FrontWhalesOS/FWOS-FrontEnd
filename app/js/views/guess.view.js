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

      if (guess_id == img_id) {
        console.log('this is the one')
        $('.guessWrap').html(" ");
      };
    }


  });

}());
