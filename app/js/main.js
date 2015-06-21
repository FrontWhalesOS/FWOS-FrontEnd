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


  //handelbars helper to select item at random
  Handlebars.registerHelper('rand', function(guesses) {

  var output = "<img class = 'randomImage' id='random-image'";

  var x = Math.round(Math.random() * ( guesses.length - 1 ));
  var i = x;

  output += ' data-id = "' + guesses[i].attributes._id + '"' + ' src = "' + guesses[i].attributes.image_url + '"';

  return output + ">";
});


}());
