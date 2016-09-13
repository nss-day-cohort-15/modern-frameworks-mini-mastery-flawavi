"use strict"

app.factory("FlowerFactory", function ($q, $http, FirebaseURL){
  console.log("are we there yet")

  let getFlowersFromFirebase = () => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}`)
      .success((data) => {
        resolve(data)
      })
      .error((error) => {
        reject(error)
      })
    })
  }
  return {getFlowersFromFirebase}
})