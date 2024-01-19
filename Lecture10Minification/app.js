/*
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


// $injector injects all of the services in angular js
*/

/* minified js leads to error cause names of services(scope, filter....) where changed
!(function () {
  "use strict";
  function n(o, t, e, r) {
    (o.name = ""),
      (o.toUpperCase = function () {
        var n = t("uppercase");
        o.name = n(o.name);
      }),
      console.log(e.annotate(n));
  }
  function o(n, o, t) {
    return "aslkdasd";
  }
  angular.module("DIApp", []).controller("DIController", n),
    console.log(o),
    console.log("function"),
    console.log(o.toString()),
    console.log(typeof o.toString());
})();*/
// error
// Error: $injector:unpr
// Unknown Provider
// Unknown provider: oProvider <- o <- DIController

// we overcame by passing the names of services as string literals (in exact order)
// and last element as the callback function which handles/utilizes this services
/*
(function () {
  ("use strict");
  angular
    .module("DIApp", [])
    .controller("DIController", [
      "$scope",
      "$filter",
      "$injector",
      DIController,
    ]);
  // dont forget to inject the services(scope,filter ) which you want to use
  function DIController($scope, $filter, $injector, $http) {
    $scope.name = "";
    $scope.toUpperCase = function () {
      var textUpperCase = $filter("uppercase");
      $scope.name = textUpperCase($scope.name);
      // $scope.name = $filter("uppercase")($scope.name);
    };
    // annotate takes in the controller name as param and gives all services used...
    console.log($injector.annotate(DIController));
  }

  function AnnotateMe(name, job, text) {
    return "aslkdasd";
  }
  console.log(AnnotateMe);
  console.log(typeof AnnotateMe);
  console.log(AnnotateMe.toString());
  console.log(typeof AnnotateMe.toString());
})();
*/

// even better way is by making use of $inject property that is attached to every handler function
/*
(function () {
  ("use strict");
  angular.module("DIApp", []).controller("DIController", DIController);
  // dont forget to inject the services(scope,filter ) which you want to use
  DIController.$inject = ["$scope", "$filter", "$injector", "$http"];
  function DIController($scope, $filter, $injector, $http) {
    $scope.name = "";
    $scope.toUpperCase = function () {
      var textUpperCase = $filter("uppercase");
      $scope.name = textUpperCase($scope.name);
      // $scope.name = $filter("uppercase")($scope.name);
    };
    // annotate takes in the controller name as param and gives all services used...
    console.log($injector.annotate(DIController));
  }

  function AnnotateMe(name, job, text) {
    return "aslkdasd";
  }
  console.log(AnnotateMe);
  console.log(typeof AnnotateMe);
  console.log(AnnotateMe.toString());
  console.log(typeof AnnotateMe.toString());
})();
*/
// minified for above code works

!(function () {
  "use strict";
  function t(n, o, e, r) {
    (n.name = ""),
      (n.toUpperCase = function () {
        var t = o("uppercase");
        n.name = t(n.name);
      }),
      console.log(e.annotate(t));
  }
  function n(t, n, o) {
    return "aslkdasd";
  }
  angular.module("DIApp", []).controller("DIController", t),
    (t.$inject = ["$scope", "$filter", "$injector", "$http"]),
    console.log(n),
    console.log("function"),
    console.log(n.toString()),
    console.log(typeof n.toString());
})();
