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

     this.collection = args.collection;


     this.render();
     $('.container').html(this.el);
      //     app.isLoggedIn = (Cookies.get('access_token') !== undefined) ? true : false;
      // if (app.isLoggedIn) {
      //   app.MainRouter.navigate('dashboard', { trigger: true });
      // } else {
      //   app.MainRouter.navigate('', { trigger: true });
      // }
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
     this.collection.add(u)

     $.post('https://morning-sands-1943.herokuapp.com/users/register', u.toJSON()).success( function (data) {

      Cookies.set('access_token', data.access_token);
      Cookies.set('user_name', data.user_name);
      self.render();


    });

   },

   loginUser: function(event){
    event.preventDefault();
    $('.alert-error').hide();
    var url = 'https://morning-sands-1943.herokuapp.com/users/login',
        self = this,
        form = $(event.target),
        loginUserName = form.find('#login-user').val(),
        loginPwd = form.find('#login-pwd').val();
        loginInfo = {
          username: loginUserName,
          password: loginPwd
        };
    $.ajax({
      url: url,
      type: 'POST',
      dataType: 'json',
      data: loginInfo,
      success:function(data){
         console.log(["Login request details: ", data]);

                if(data.error) {  // If there is an error, show the error messages
                    $('.alert-error').text(data.error.text).show();
                }
                else { // If not, send them back to the home page
                    window.location.replace('#');
                }
            }
          });




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
