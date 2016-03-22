'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid', ['isMobile',function (isMobile) {
    return {
      templateUrl: 'app/image-grid/image-grid.html',
      restrict: 'E',
      scope:{
        data: '='
      },
      link: function (scope, element, attrs) {
        scope.isMobile = isMobile.isMobile();
       

        scope.calcFlexSize = scope.isMobile ? 0 : 20;
      }
    };
  }]);
