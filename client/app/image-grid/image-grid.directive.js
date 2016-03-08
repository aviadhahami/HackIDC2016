'use strict';

angular.module('hackIdcApp')
  .directive('ImageGrid', [function () {
    return {
      templateUrl: 'app/mobile-nav/image-grid.html',
      restrict: 'E',
      scope:{
        data: '='
      },
      link: function (scope, element, attrs) {

      }
    };
  }]);
