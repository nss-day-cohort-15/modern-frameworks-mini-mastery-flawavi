"use strict"

app.factory("FlowerFactory", function ($q, $http){
  console.log("are we there yet")

  let getFlowersFromFireBase = () => {
    return $q((resolve, reject) => {
      $http.get(`${FirebaseURL}.json`)
      .success((data) => {
        console.log(data)
        resolve(data)
      })
      .error((error) => {
        reject(error)
      })
    })
  }
  return {getFlowersFromFirebase}
})