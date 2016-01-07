'use strict';

angular.module('hackIdcApp')
  .controller('MainCtrl',  ['$scope','$window','$timeout','$document','isMobile',
    function ($scope,$window,$timeout,$document,isMobile) {
      $scope.isMobile = isMobile.isMobile();
      console.log(isMobile);

      // Workaround for the fittext thing
      $timeout(function(){
        $scope.titles = {
          mainTitle : 'Welcome to HackIDC 2016',
          description : 'What is HackIDC?',
          prizes : 'Prizes',
          sponsors : 'Sponsors'
        };
      },50);

      $scope.video = {
        id : 'h_2iNc_-dDk'
      };

      $scope.scrollTo = function(location){
        var offset = -10;
        $document.scrollToElementAnimated( angular.element(document.getElementById(location)), offset, 200);
      };

    }]);
