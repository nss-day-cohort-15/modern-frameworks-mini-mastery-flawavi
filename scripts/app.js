"use strict"

var app = angular.module("FlowerPower", ["ngRoute"])
    .constant("FirebaseURL", "https://flower-power-angular.firebaseio.com/arrangements")

    app.config(function($routeProvider){
    $routeProvider
        //when arrived at site for first time, go to login
        .when("/", {
          templateUrl: "partials/mainView.html",
          controller: "MainVewCtrl"
        })
        .otherwise("/")
})

  app.run(($location, FBCreds) => {
  let creds = FBCreds;
  let authConfig = {
        apiKey: creds.key,
        authDomain: creds.authDomain
      };
      firebase.initializeApp(authConfig);
});