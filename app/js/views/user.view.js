;(function (){

  'use strict';

  app.Views.User = Backbone.View.extend({

    className: "userProfile",

    template: hbs.user,

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
