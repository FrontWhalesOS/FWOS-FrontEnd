;(function (){

  'use strict';

  app.Views.User = Backbone.View.extend({

    className: "userProfile",

    template: hbs.user,

    initialize: function(options) {

      var args = options || {};

      this.collectionUsers = args.collectionUsers;

      this.render();
      $('.container').html(this.el);

    },

    render: function(){
      this.$el.html(this.template({ user: this.collectionUsers.toJSON() }));

    }

  });

}());
