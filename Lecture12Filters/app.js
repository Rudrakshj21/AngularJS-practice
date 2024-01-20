(function () {
  "use strict";

  angular.module("MsgApp", []).controller("MsgController", MsgController);

  MsgController.$inject = ["$scope", "$filter"];
  function MsgController($scope, $filter) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = 12.312;
    $scope.sayMessage = function () {
      return $filter("uppercase")(
        "Yaakov likes to eat healthy snacks at night!"
      );
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };
  }
})();
