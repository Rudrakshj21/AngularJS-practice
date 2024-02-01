(function () {
  "use strict";

  angular
    .module("MsgApp", [])
    .controller("MsgController", MsgController)
    .filter("loves", LovesFilter)
    .filter("truth", TruthFilter);
  // notice how we did not inject truthFilter here as we are directly going to use it in html declarative binder takes care of the reference for us
  MsgController.$inject = ["$scope", "$filter", "lovesFilter"];
  function MsgController($scope, $filter) {
    $scope.name = "Yaakov";
    $scope.stateOfBeing = "hungry";
    $scope.cookieCost = 12.312;
    $scope.sayMessage = function () {
      return $filter("uppercase")(
        "Yaakov likes to eat healthy snacks at night!"
      );
    };
    $scope.sayLovesMessage = function () {
      return LovesFilter()("Yaakov likes to eat healthy snacks at night!");
    };

    $scope.feedYaakov = function () {
      $scope.stateOfBeing = "fed";
    };
  }
  // @factory
  function LovesFilter() {
    return function (input) {
      input = input || "";
      return input.replace("likes", "loves");
    };
  }
  // @factory
  function TruthFilter() {
    return function (input, target, replace) {
      input = input || "";
      input = input.replace(target, replace);
      return input;
    };
  }
})();
