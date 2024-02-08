(function () {
  "use strict";
  //   console.log(x)
  //   var x = 10;
  angular
    .module("practiceApp", [])
    .controller("Ctrl", myController)
    .filter("test", myFilterFactory);

  myController.$inject = ["$scope", "$filter", "$injector"];
  function myController($scope, $filter, $injector) {
    // console.log($injector.annotate(myController));
    // console.log($injector);
    // console.log("hi");
    // console.log($scope)
    $scope.name = "";
    $scope.val = 0;
    $scope.random = 10;
    $scope.money = 12.32;
    $scope.lowername = "abdul";
    $scope.employee = {
      name: "likhith",
      age: 12,
    };
    $scope.upper = function () {
      var upcaseText = $filter("uppercase");
      // console.log(upcaseText($scope.lowername))
      $scope.lowername = upcaseText($scope.lowername);
    };
    $scope.calculateVal = function () {
      let temp = $scope.name;
      let res = 0;
      for (let i = 0; i < temp.length; i++) {
        res += Number(temp.charCodeAt(i));
      }
      $scope.val = res;
    };
    $scope.sayMessage = function () {
      console.log("logged");
      return $filter("uppercase")("hello");
    };
    // console.log(testFilter("likhit is a good boy "));

    $scope.showNumberOfWatchers = function () {
      console.log($scope);
    };
  }

  function myFilterFactory() {
    return function (input, isUpper = false) {
      if (isUpper) {
        return input.replaceAll(" ", "-").toUpperCase();
      }
      return input.replaceAll(" ", "-");
    };
  }
})();
