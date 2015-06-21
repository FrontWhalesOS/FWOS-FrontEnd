;(function (){

  'use strict';

  app.Views.Answer = Backbone.View.extend({

    className: "Answer",

    template1: hbs.rightanswer,

    template2: hbs.wrong,

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
