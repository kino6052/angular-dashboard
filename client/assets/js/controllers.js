'use strict';

/* Controllers */

var oxhnControllers = angular.module('oxhnControllers', []);

oxhnControllers.controller('questionaireListCtrl', ['$scope', '$http', '$routeParams',
  function($scope, $http, $routeParams) {
    $http.get('questions.json').success(function(data) {
      $scope.questions = data;
      $scope.questionId = $routeParams.questionId;
      $scope.question = $scope.questions[$scope.questionId];
    });
    $scope.orderProp = 'age';
  }]);


