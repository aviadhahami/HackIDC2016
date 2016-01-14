'use strict';

angular.module('hackIdcApp')
  .directive('mobileNav', function () {
    return {
      templateUrl: 'app/mobile-nav/mobile-nav.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        var links = attrs.links;
       scope.bgColor = attrs.triggerFabColor || 'rgb(255,87,34)';
        console.log(scope)
      }
    };
  });
