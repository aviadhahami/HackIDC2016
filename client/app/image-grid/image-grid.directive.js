'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid',['isMobile','sponsorsApiGetter','$timeout',
    function (isMobile,sponsorsApiGetter,$timeout) {
      return {
        templateUrl: 'app/image-grid/image-grid.html',
        restrict: 'E',
        scope:{
          data: '='
        },
        link: function (scope, element, attrs) {
          var isoOpts = {
            percentPosition: true
          };
          scope.$emit('iso-option', isoOpts);
          scope.sponsorsData = sponsorsApiGetter.getData();
          scope.isMobile = isMobile.isMobile();
          scope.bricks=  scope.sponsorsData;

          scope.toggle = function(brick){
            brick.toggle = !brick.toggle;
            $timeout(
              scope.$emit('iso-method', {name:'layout', params:null})
              ,0);
          }
        }

      };
    }]);
