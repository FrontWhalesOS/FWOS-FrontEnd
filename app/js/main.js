;(function (){

  'use strict';
  $.ajaxSetup({
    headers: {
      'Access-Token' : Cookies.get('access_token')
    }
  });


  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();

  allUsers.fetch().done( function() {

    app.MainRouter = new app.Routers.MainRouter({
      collectionUsers : allUsers,
      collectionPosts : allPosts
    });

    Backbone.history.start();

  });

  //login/out link hover function

  $('#username-link').on('mouseenter', function() {
    $('#logout-box').fadeIn(250);
    $('#logout-box').on('mouseleave', function() {
      $('#logout-box').fadeOut(250);
    });
  });
}());
