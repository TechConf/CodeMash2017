(function(angular) {
  'use strict'; // ECMA5 strict mode

  // baseUrl is used for routes
  var baseUrl = '/';

  var myApp = angular.module('MyApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  // Configure the module.
  myApp.config(['$routeProvider', '$locationProvider', '$httpProvider', function($routeProvider, $locationProvider, $httpProvider) {

    $locationProvider.html5Mode(true); // Assume HTML5 compliant browser that have History API support.

    // ROUTES /////////////////////////////////////////////////////////////////
    $routeProvider
    .when(baseUrl, { // BASE ROUTE
      templateUrl: baseUrl + 'components/project/display.html',
      controllerAs: 'ctrl',
      reloadOnSearch: false,
      controller: ['$rootScope', function($rootScope) {
        var ctrl = this;
      }]
    });

  }]); // end .config()

  myApp.run(['$rootScope', '$location', '$timeout', '$log', function($rootScope, $location, $timeout, $log) {
    $rootScope.baseUrl = baseUrl;
  }]);

}(window.angular));

/**
@memberof MyApp
@ngdoc directive
@name projectDisplay
@description A simple display page
@example <project-display></project-display>
*/
(function(angular) {
  'use strict';
  angular.module('MyApp').directive('projectDisplay', ['$rootScope', '$log', function($rootScope, $log) {
    $log.log("ProjectDisplay is running...");
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/components/project/display.html',
      scope: {},
      controllerAs: 'ctrl',
      controller: ['$scope', function($scope) {

        var ctrl = this;

      }]
    };

  }]);
}(window.angular));

/**
@memberof MyApp
@ngdoc directive
@name TeamDisplay
@description A simple display page
@example <Team-display></Team-display>
*/
(function(angular) {
  'use strict';
  angular.module('MyApp').directive('TeamDisplay', ['$rootScope', '$log', function($rootScope, $log) {
    $log.log("TeamDisplay is running...");
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/components/Team/display.html',
      scope: {},
      controllerAs: 'ctrl',
      controller: ['$scope', function($scope) {

        var ctrl = this;

      }]
    };

  }]);
}(window.angular));
