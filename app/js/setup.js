;(function (){

  'use strict';

  window.app = {};
  window.app.Models = {};
  window.app.Collections = {};
  window.app.Views = {};
  window.app.Routers = {};
  window.app.User = {};

  //root URL
  app.rootURL = myendpoint;

  //   $.ajaxSetup({
  //   headers: {
  //   'Access-Token' : Cookies.get('access_token')
  //   }
  // });
    var cookie = Cookies.get('username');
    $('#username-link').text(cookie);

}());
