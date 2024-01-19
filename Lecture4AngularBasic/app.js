(function () {
  "use strict";

  angular
    .module("myFirstApp", [])
    .controller("MyFirstController", function ($scope) {
      $scope.name = "user";
      $scope.inputVal = "";
      $scope.sayHello = function () {
        // console.log('hello') dirty checking, 2 checks in 1 digest cycle
        return "Hello" + $scope.inputVal;
      };
    });
})();
