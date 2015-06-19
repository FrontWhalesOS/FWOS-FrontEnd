;(function (){

  'use strict';

  app.Views.About = Backbone.View.extend({

    className: "about",

    template: hbs.about,

    initialize: function(options) {

      var args = options || {};

      this.collectionUsers = args.collectionUsers;

      this.render();
      $('.container').html(this.el);

    },

    render: function(){
      this.$el.html(this.template);

    }

  });

}());
