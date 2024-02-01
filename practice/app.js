(function () {
  "use strict";
  //   console.log(x)
  //   var x = 10;
  angular
    .module("practiceApp", [])
    .controller("Ctrl", function ($scope, $filter, $injector) {
      // console.log($injector);
      // console.log("hi");
      // console.log($scope)
      $scope.name = "";
      $scope.val = 0;
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
    });
})();
