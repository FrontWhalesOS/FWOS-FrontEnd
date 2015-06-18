;(function (){

  'use strict';

  app.Views.Scoreboard = Backbone.View.extend({

    className: "scoreboard-main",

    template: hbs.scoreboard,

    initialize: function(options) {

      var args = options || {};

      this.collection = args.collection;

      this.render();
      $('.container').html(this.el);

    },

    render: function(){
      this.$el.html(this.template({ user: this.collection.toJSON() }));

    }

  });

}());
