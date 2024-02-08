(function () {
  "use strict";
  angular.module("digestApp", []).controller("digestCtrl", testDigest);
  testDigest.$inject = ["$scope"];
  function testDigest($scope) {
    $scope.counter = 0;
    $scope.showNumberOfWatchers = function () {
      console.log($scope);
      console.log("no of watchers", $scope.$$watchersCount);
    };
    $scope.countOnce = function () {
      $scope.counter++;
    };
    $scope.$watch("counter", function (oldValue, newValue) {
      console.log("old val : ", oldValue);
      console.log("new val : ", newValue);
    });
  }
})();
