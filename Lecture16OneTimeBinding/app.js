(function () {
  "use strict";
  angular.module("myApp", []).controller("ctrl", myCtrl);
  myCtrl.$inject = ["$scope"];

  function myCtrl($scope) {
    $scope.firstName = "rudraksh";
    // $scope.fullName = ""; // this was automatically executed during first digest cycle
    // and since it was once time binding it wont change from its initial value which is ""(empty)
    // not only that but the watcher attached to it is automatically removed
    $scope.showNumberOfWatchers = function () {
      console.log("number of watchers : ", $scope.$$watchersCount);
    };
    $scope.setFullName = function () {
      // since we create this on click only we are able to set it once and the watcher is still present before clicking on this
      $scope.fullName = $scope.firstName + " " + "Joshi";
    };
    $scope.logFirstName = function () {
      console.log("first name is : ", $scope.firstName);
    };
    $scope.logFullName = function () {
      console.log("Full name is : ", $scope.fullName);
    };
    // console.log("hi");
    // console.log($scope);
  }
})();
