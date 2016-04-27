'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid',['isMobile','sponsorsApiGetter',
    function (isMobile,sponsorsApiGetter) {
      return {
        templateUrl: 'app/image-grid/image-grid.html',
        restrict: 'E',
        scope:{
          data: '='
        },
        link: function (scope, element, attrs) {

          scope.sponsorsData = sponsorsApiGetter.getData();
          scope.isMobile = isMobile.isMobile();
          scope.bricks=  scope.sponsorsData;

          scope.$emit('iso-option', {
            percentPosition: true,
            transitionDuration: '0.2s',
            masonry: {
              columnWidth: 100
            }
          });
          scope.toggle = function(brick){
            brick.toggle = !brick.toggle;
            scope.$emit('iso-method', {name:'layout', params:null});

          }
        }

      };
    }]);
