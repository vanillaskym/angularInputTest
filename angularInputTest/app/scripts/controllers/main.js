'use strict';

angular.module('angularInputTestApp')
  .controller('MainCtrl', function ($scope) {
     $scope.majorModel = "0";
     $scope.minorModel = "0";
     $scope.revisionModel = "3";

     $scope.visions = false;
  });
