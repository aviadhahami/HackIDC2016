'use strict';

angular.module('hackIdcApp')

  .controller('SignupCtrl',  ['$scope','isMobile',
      function ($scope,isMobile) {
        $scope.isMobile = isMobile.isMobile();
      }
    ]
  );
