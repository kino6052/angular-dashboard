'use strict';

angular.module('Dash')
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "",
      templateUrl: 'home/index.html'
    })
    .state('sms', {
      url: '/sms',
      templateUrl: 'sms/index.html'
    });
});