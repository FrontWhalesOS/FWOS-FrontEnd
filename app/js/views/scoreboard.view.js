;(function (){

  'use strict';

  app.Views.Scoreboard = Backbone.View.extend({

    className: "scoreboard-main",

    template: hbs.scoreboard,

    initialize: function(options) {

      var args = options || {};
      var self = this;

      this.collectionGuesses = args.collectionGuesses;

      console.log(this.collectionGuesses);
      this.collectionGuesses.fetch().success (function() {
        self.render();
      });
     $('.container').html(this.el);
    },

    render: function(){
      this.$el.html(this.template({ guess: this.collectionGuesses.toJSON() }));
    }

  });

}());
