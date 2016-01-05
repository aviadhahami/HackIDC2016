'use strict';

angular.module('hackIdcApp')
  .directive('navScroll', function () {
    return {
      template: '<div></div>',
      restrict: 'EA',
      link: function (scope, element, attrs) {
        element.text('this is the navScroll directive');
      }
    };
  });