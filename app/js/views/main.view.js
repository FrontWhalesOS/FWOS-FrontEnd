;(function (){

 'use strict';


 app.Views.Main = Backbone.View.extend({

   className: "main",

   events: {

     "submit #login-form" : "loginUser",
     "submit #register-form" : "registerUser",
     "click #reg-head" : "openReg",
     "click #login-head": "openLogin"

   },

   template: hbs.main, // main = template for login/register page

   initialize: function(options) {

     var args = options || {};

     this.collectionUsers = args.collectionUsers;
      //    window.app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
      // if (app.isLoggedIn) {
      //   app.MainRouter.navigate('dashboard', { trigger: true });
      // } else {
      //   app.MainRouter.navigate('', { trigger: true });
      // }


     this.render();
     $('.container').html(this.el);

   },

   render: function(){

     this.$el.html(this.template)
  },

   registerUser : function(event) {

     event.preventDefault();

     //registration form values
     var self = this,
         form = $(event.target),
         user_name = form.find('#new-username').val(),
         full_name = form.find('#new-name').val(),
         email = form.find('#new-email').val(),
         pwd = form.find('#new-pwd').val();

         //password verify function
     // var password = function() {

     //   var
     //       verify = form.find('#ver-pwd').val();

     //   if (intended == verify) {
     //     return intended;
     //   } else {
     //     $('.pwError').html('Your passwords do not match.');
     //   };
     // }


     //create user instance on registration
     var u = new app.Models.User({

       username : user_name,
       password : pwd,
       full_name : full_name,
       email : email

     });
     console.log(u)
     //add instance to collection and push to database
     this.collectionUsers.add(u)

     $.post('https://morning-sands-1943.herokuapp.com/users/register', u.toJSON()).success( function (data) {
      self.render();


    });

   },

   loginUser: function(event){
    event.preventDefault();
    $('.alert-error').hide();
    var self = this,
        form = $(event.target),
        loginUserName = form.find('#login-user').val(),
        loginPwd = form.find('#login-pwd').val(),
        loginInfo = {
          username: loginUserName,
          password: loginPwd
        };
    $.post('https://morning-sands-1943.herokuapp.com/users/login', loginInfo).success( function (data){
        Cookies.set('access_token', data.user.access_token);
        Cookies.set('username', data.user.username);
        app.User = data;
        // $.ajaxSetup({
        //   headers: {
        //     'Access-Token' : Cookies.get('access_token')
        //   }
        // });
        app.MainRouter.navigate('dashboard', { trigger: true });
        console.log(app.User);
      });
    $('#this-user').text(loginUserName);
    // var cookie = Cookies.get('access_token', app.LoggedInUser.access_token);




   },

   openReg: function() {
    $('#register-form').slideDown();
    $('#login-wrap').slideUp();
   },

   openLogin: function() {
    $('#login-wrap').slideDown();
    $('#register-form').slideUp();
   }
 });

}());
