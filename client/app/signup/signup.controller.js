'use strict';

angular.module('hackIdcApp')

  .controller('SignupCtrl',  ['$scope','isMobile',
      function ($scope,isMobile) {
        $scope.isMobile = isMobile.isMobile();
        $scope.timeToCount = (function(){
          return Math.round((new Date('02/01/2016') -new Date())/1000);
        })();
      }
    ]
  );
