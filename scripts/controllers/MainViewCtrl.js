"use strict"

app.controller("MainViewCtrl", function($scope, FlowerFactory){

  $scope.message = "testing"


  $scope.getFlowers = function(){
    FlowerFactory.getFlowersFromFirebase()
    .then(function(data){

      $scope.flowers = data
      console.log($scope.flowers, "flowers data")
    })
  }
  $scope.getFlowers();
})

