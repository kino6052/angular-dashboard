'use strict';

/* App Module */

var oxhnDashboardApp = angular.module('oxhnDashboardApp', [
  'ngRoute',
  'oxhnControllers'
]);

oxhnDashboardApp.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/questionaire', {
        redirectTo: '/questionaire/0'
      }).
      when('/questionaire/:questionId', {
        templateUrl: 'partials/questionaire.html',
        controller: 'questionaireListCtrl'
      }).
      otherwise({
        redirectTo: '/questionaire/0'
      });
  }]);
