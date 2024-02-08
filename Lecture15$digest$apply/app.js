(function () {
  "use strict";
  angular.module("digestApp", []).controller("digestCtrl", testDigest);
  // always try to look for angular alternatives
  testDigest.$inject = ["$scope", "$timeout"];
  function testDigest($scope, $timeout) {
    $scope.counter = 0;

    // $scope.upCounter = function () {
    //   setTimeout(() => {
    //   $scope.counter++;
    //     console.log("counter incremented!");
    //     $scope.$digest();// manual digest cycle call
    //   }, 2000);
    // };

    //  $scope.upCounter = function () {
    //    setTimeout(() => {
    //     $scope.$apply(()=>{
    //       $scope.counter++;
    //       console.log("counter incremented!");
    //     })
    //    }, 2000);
    //  };
    $scope.upCounter = function () {
      $timeout(function () {
        $scope.counter++;
        console.log("counter increment");
      }, 2000);
    };
    $scope.watcherNum = function () {
      console.log($scope.$$watchersCount);
    };
  }
})();
