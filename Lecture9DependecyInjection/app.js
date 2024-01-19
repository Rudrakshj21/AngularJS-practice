(function () {
  ("use strict");
  angular.module("DIApp", []).controller("DIController", DIController);
  // dont forget to inject the services(scope,filter ) which you want to use
  function DIController($scope, $filter,$injector,$http) {
    $scope.name = "";
    $scope.toUpperCase = function () {
      var textUpperCase = $filter("uppercase");
      $scope.name = textUpperCase($scope.name);
      // $scope.name = $filter("uppercase")($scope.name);
    
    };
    // annotate takes in the controller name as param and gives all services used...
    console.log($injector.annotate(DIController))

  }

  function AnnotateMe(name, job, text) {
    return "aslkdasd";
  }
  console.log(AnnotateMe);
  console.log(typeof AnnotateMe);
  console.log(AnnotateMe.toString());
  console.log(typeof AnnotateMe.toString());
})();

// $injector injects all of the services in angularjs
