/*(function () {
  "use strict";
  angular
    .module("ExpressionModule", [])
    .controller("ExpressionController", ExpressionControl);
  ExpressionControl.$inject = ["$scope", "$filter"];
  function ExpressionControl($scope) {
    $scope.name = "Rudraksh";
    $scope.sayMessage = function () {
      return "One day or day one (^///^)";
    };
    $scope.images = ["wolf", "cave"];
    $scope.changeImage = function () {
      if ($scope.currentImage != "wolf") {
        $scope.currentImage = "wolf";
      } else if ($scope.currentImage != "cave") {
        $scope.currentImage = "cave";
      }
    };
    $scope.currentImage = "";
  }
})();
*/

(function () {
  "use strict";
  angular
    .module("ExpressionModule", [])
    .controller("ExpressionController", ExpressionControl);
  ExpressionControl.$inject = ["$scope", "$filter"];
  function ExpressionControl($scope) {
    $scope.name = "Rudraksh";
    // $scope.currentPic = "";
    $scope.play = function () {
        const random = Math.floor(Math.random() * 3 + 1);
      const picNo = random == 1 ? 1 : random == 2 ? 2 : 3;
      if (picNo == 1) {
        $scope.currentPic = "rock";
      } else if (picNo == 2) {
        $scope.currentPic = "paper";
      } else {
        $scope.currentPic = "scissor";
      }
    };
  }
})();
