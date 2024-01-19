(function () {
  angular
    .module("ItemModule", [])
    .controller("ItemController", checkItemQuantity);
  checkItemQuantity.$inject = ["$scope"];
  function checkItemQuantity($scope) {
    $scope.items = [];
    $scope.message = "";
    console.log($scope.items);
    $scope.checkItem = () => {
      if ($scope.items.length == 0) {
        $scope.message = "Empty";
      } else {
        let count = 0;
        console.log($scope.items);
        const itemArray = $scope.items.split(",");
        itemArray.forEach((item) => {
          count++;
        });
        if (count <= 3) {
          $scope.message = "Enjoy! ✅";
        } else {
          $scope.message = "Too much ❌";
        }
      }
    };
  }
})();
