(function () {
  "use strict";
  angular
    .module("NameCalculator", [])
    .controller("NameCalculatorController", function ($scope) {
      $scope.username = "";
      $scope.totalValue = 0;
      $scope.getValue = function () {
        return getNumericValueOfName($scope.username);
      };
    });
})();
function getNumericValueOfName(name) {
  let totalValue = 0;
  for (let i = 0; i < name.length; i++) {
    totalValue += name.charCodeAt(i);
  }
  return totalValue;
}
