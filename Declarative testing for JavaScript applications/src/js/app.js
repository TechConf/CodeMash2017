(function(angular) {
  'use strict'; // ECMA5 strict mode

  // baseUrl is used for routes
  var baseUrl = '/';

  var myApp = angular.module('MyApp', ['ngRoute', 'ngSanitize', 'ui.bootstrap']);

  // Configure the module.
  myApp.config(function($routeProvider, $locationProvider, $httpProvider) {

    $locationProvider.html5Mode(true); // Assume HTML5 compliant browser that have History API support.

    // ROUTES /////////////////////////////////////////////////////////////////
    $routeProvider
    .when(baseUrl, { // BASE ROUTE
      templateUrl: baseUrl + 'components/project/display.html',
      controllerAs: 'ctrl',
      reloadOnSearch: false,
      controller: function($rootScope) {
        var ctrl = this;
      }
    });

  }); // end .config()

  myApp.run(function($rootScope, $location, $timeout, $log) {
    $rootScope.baseUrl = baseUrl;
  });

}(window.angular));
