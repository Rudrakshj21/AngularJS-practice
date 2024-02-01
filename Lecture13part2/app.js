(function () {
  angular
    .module("customFilterModule", [])
    .controller("customerFilterController", customFilterControl)
    .filter("custom", filterFactory);
  customFilterControl.$inject = ["$scope", "customFilter"];
  function customFilterControl($scope, customFilter) {}
})();
