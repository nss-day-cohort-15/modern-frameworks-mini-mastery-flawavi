"use strict"

app.controller("MainViewCtrl", function($scope, FlowerFactory){

  $scope.getFlowers = function(){
    FlowerFactory.getFlowersFromFirebase()
    .then(function(data){

      $scope.flowers = data
      console.log($scope.flowers, "flowers data")
      console.log($scope.flowers.category)
    })
  }
  $scope.getFlowers();
})

