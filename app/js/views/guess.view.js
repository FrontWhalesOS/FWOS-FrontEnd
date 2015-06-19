;(function (){

  'use strict';

  app.Views.Guess = Backbone.View.extend({

    className: "guess",

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
      console.log(guesses);
      this.$el.html(this.template({guesses : guesses}));
    },

    getRandomSet: function() {
      return this.collectionPosts.sample(4);
    }


  });

}());
