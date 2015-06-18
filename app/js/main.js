;(function (){

  'use strict';
  $.ajaxSetup({
    headers: {
      'Access-Token' : Cookies.get('access_token')
    }
  });


  var allUsers = new app.Collections.Users();

  allUsers.fetch().done( function() {

    app.MainRouter = new app.Routers.MainRouter({
      collection : allUsers
    });

    Backbone.history.start();

  });
}());
