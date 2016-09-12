"use strict"

app.controller("MainViewCtrl", function($scope, FlowerFactory){

  $scope.message = "testing"

  $scope.getFlowers = function(){
    FlowerFactory.getFlowersFromFireBase()
    .then(function(data){
      console.log(data, "data")
      $scope.flowers = data.arrangements
    })
  }
  $scope.getFlowers();
})

