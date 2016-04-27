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
          var flag = false;

          scope.sponsorsData = sponsorsApiGetter.getData();
          scope.isMobile = isMobile.isMobile();
          scope.bricks=  scope.sponsorsData;

          scope.toggle = function(brick){
            brick.toggle = !brick.toggle;
            if(!flag){
              flag = true;
              scope.$emit('iso-option', {
                percentPosition: true
              });
            }
            scope.$emit('iso-method', {name:'layout', params:null});

          }
        }

      };
    }]);
