;(function (){

  'use strict';

  app.Views.Guess = Backbone.View.extend({

    className: "guess",

    template: hbs.guess,

    initialize: function(options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);
    },

    render: function(){
      this.$el.html(this.template({ user: this.collection.toJSON() }))

    }

  });

}());
