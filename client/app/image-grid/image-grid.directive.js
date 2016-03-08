'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid', [function () {
    return {
      templateUrl: 'app/image-grid/image-grid.html',
      restrict: 'E',
      scope:{
        data: '='
      },
      link: function (scope, element, attrs) {
        console.log(scope.data);
        console.log('run')
      }
    };
  }]);
