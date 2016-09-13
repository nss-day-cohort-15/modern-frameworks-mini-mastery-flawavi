"use strict"

var app = angular.module("FlowerPower", ["ngRoute"])
.constant("FirebaseURL", "https://flower-power-angular.firebaseio.com/arrangements.json")

app.config(function($routeProvider){
  $routeProvider
    //when arrived at site for first time, go to login
  .when("/", {
    templateUrl: "partials/mainView.html",
    controller: "MainViewCtrl"
  })
  .otherwise("/");
});

// app.run(($location, FBCreds) => {
//   let creds = FBCreds;
//   let authConfig = {
//       apiKey: creds.key,
//       authDomain: creds.authDomain
//     };
//   firebase.initializeApp(authConfig);
// });