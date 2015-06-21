;(function (){

  'use strict';

  app.Views.Dashboard = Backbone.View.extend({

    className: "dash",

    template: hbs.dashboard,

    initialize: function(options) {

      var args = options || {},
          self = this;

      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionGuesses = args.collectionGuesses;

      this.collectionGuesses.fetch();
      this.collectionUsers.fetch();
      this.collectionPosts.fetch().success( function() {
        self.render();
      });

      $('.container').html(this.el);
    },

    render: function(){
      this.$el.html(this.template({ post: this.collectionPosts.toJSON() }));
    }

  });

}());
