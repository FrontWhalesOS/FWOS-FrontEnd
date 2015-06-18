;(function (){

  'use strict';

  app.Views.Dashboard = Backbone.View.extend({

    className: "dash",

    template: hbs.dashboard,

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
