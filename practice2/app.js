(function () {
  "use strict";

  angular.module("myApp", []).controller("Ctrl", myController);

  myController.$inject = ["$scope"];
  function myController($scope) {
    $scope.onceCounter = 0;
    $scope.counter  = 0;
    $scope.name = "yakov";
    
    $scope.showNumberOfWatchers = function () {
      console.log("number of watchers : ", $scope.$$watchersCount);
    };
    $scope.countOnce = function(){
      $scope.onceCounter = 1;
    
    }
    $scope.increment = function(){
      $scope.counter ++;
    }
    // $watch(name of property,handler which will fire once the property is changed)
    // $scope.$watch('onceCounter',function (newValue,oldValue){
    //   console.log('onceCounter old val : ', oldValue);
    //   console.log('onceCounter new val : ', newValue);
    // })
    
    // $scope.$watch('counter',function (newValue,oldValue){
    //   console.log('increment old val : ', oldValue);
    //   console.log('increment new val : ', newValue);
    // })

    // golden rule checks at least once if a prop is changed
    $scope.$watch(function(){
      console.log('digest loop fired!')
    })

  }
})();
