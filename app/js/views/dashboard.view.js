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

      this.collectionPosts.fetch().success (function() {
        self.render();
      })
      $('.container').html(this.el);
    },

    render: function(){
      this.$el.html(this.template({ post: this.collectionPosts.toJSON() }))
    }

  });

}());
