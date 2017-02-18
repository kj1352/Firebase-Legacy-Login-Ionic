angular.module('starter.controllers', [])

.controller('SignupCtrl', function($scope) {
  $scope.data = {};
  $scope.signupEmail = function(){

  var ref = new Firebase("https://jssate.firebaseio.com/");

  ref.createUser({
    email    : $scope.data.email,
    password : $scope.data.password
  }, function(error, userData) {
    if (error) {
      console.log("Error creating user:", error);
    } else {
      console.log("Successfully created user account with uid:", userData.uid);
    }
  });

};
})

.controller('LoginCtrl', function ($scope) {
  $scope.data = {};
  $scope.loginEmail = function(){

  var ref = new Firebase("https://jssate.firebaseio.com/");

  ref.authWithPassword({
    email    : $scope.data.email,
    password : $scope.data.password
  }, function(error, authData) {
    if (error) {
      console.log("Login Failed!", error);
    } else {
      console.log("Authenticated successfully with payload:", authData);
    }
  });

};
});
