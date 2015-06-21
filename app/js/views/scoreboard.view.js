;(function (){

  'use strict';

  app.Views.Scoreboard = Backbone.View.extend({

    className: "scoreboard-main",

    template: hbs.scoreboard,

    initialize: function(options) {

      var args = options || {};

      this.collectionUsers = args.collectionUsers;

      this.collectionUsers.fetch().success (function() {
        self.render();
      });
    },

    render: function(){
      this.$el.html(this.template({ user: this.collectionUsers.toJSON() }));

    }

  });

}());
