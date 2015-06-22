;(function (){

  'use strict';

  app.Views.User = Backbone.View.extend({

    className: "userProfile",

    template: hbs.user,

    initialize: function(options) {

      var args = options || {};
      this.singleUserId = args.singleUserId;
      this.collectionUsers = args.collectionUsers;
      this.collectionPosts = args.collectionPosts;
      this.collectionGuesses = args.collectionGuesses;



      this.render();
      $('.container').html(this.el);

    },

    render: function(){

      var cookieId = Cookies.get('id')
      var singleUser = this.collectionUsers.get(cookieId);
      // var singleUser = this.collectionPosts.get(this.user);
      this.$el.html(this.template(singleUser.toJSON()));

    }

  });

}());
