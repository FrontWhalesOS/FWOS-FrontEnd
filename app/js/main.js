;(function (){

  'use strict';


  // $.ajaxSetup({

  //   headers: {
  //     'Access-Token' : Cookies.get('access_token')
  //   }

  // });
  // app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
  // if (app.isLoggedIn) {
  //   console.log('Yep, logged in');
  // } else {
  //   console.log('Nope, not logged in');
  // }


  var allUsers = new app.Collections.Users();
  var allPosts = new app.Collections.Posts();
  var allGuesses = new app.Collections.Guesses();

  allUsers.fetch().done( function() {

    app.MainRouter = new app.Routers.MainRouter({
      collectionUsers : allUsers,
      collectionPosts : allPosts,
      collectionGuesses: allGuesses
    });
    Backbone.history.start();

  });

  //login/out link hover function

  $('#username-link').on('mouseenter', function() {
    $('#logout-box').fadeIn(250);
    $('#user-box').fadeIn(250);
    $('#username-link').on('mouseleave', function() {
      $('#logout-box').fadeOut(250);
      $('#user-box').fadeOut(250);
    });
  });

  //handelbars helper to select item at random
  Handlebars.registerHelper('rand', function(guesses) {


  var x = Math.round(Math.random() * ( guesses.length - 1 ));
  var i = x;

  var output = "<div class = guessImgWrap>";
      output += "<span class = 'userLabel'><i>posted&nbsp;by&nbsp;</i>" + guesses[i].attributes.username + "</span>";
      output += "<img class = 'randomImage' id='random-image'";
      output += ' data-id = "' + guesses[i].attributes._id + '"' + ' src = "' + guesses[i].attributes.image_url + '">';
      output += "</div>";

  return output;
});

$('#logout-box').on('click', function(){
      Cookies.expire('access_token');
      Cookies.expire('username');
      Cookies.expire('id');
      $('#this-user').text('SignIn');
});

}());
