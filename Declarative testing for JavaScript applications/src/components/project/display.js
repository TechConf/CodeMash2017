/**
@memberof MyApp
@ngdoc directive
@name projectDisplay
@description A simple display page
@example <project-display></project-display>
*/
(function(angular) {
  'use strict';
  angular.module('MyApp').directive('projectDisplay', function($rootScope, $log) {
    $log.log("ProjectDisplay is running...");
    return {
      restrict: 'E',
      replace: true,
      templateUrl: '/components/project/display.html',
      scope: {},
      controllerAs: 'ctrl',
      controller: function($scope) {

        var ctrl = this;

      }
    };

  });
}(window.angular));
