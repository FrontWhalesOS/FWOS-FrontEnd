;(function (){

  'use strict';

  app.Views.Right = Backbone.View.extend({

    className: "rightAnswer",

    template: hbs.rightanswer,

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
