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
          var emitLayout = function () {
            scope.$emit('iso-method', {name:'layout',params:null});
          };
          var isoOptions = function(){
            scope.$emit('iso-option', {
              layoutMode: 'masonry'
            });
          };
          $timeout(isoOptions,1000);
          scope.sponsorsData = sponsorsApiGetter.getData();
          scope.isMobile = isMobile.isMobile();
          scope.bricks=  scope.sponsorsData;

          scope.toggle = function(brick){
            brick.toggle = !brick.toggle;
            // IMPORTANT! timeout MUST be larger than animation time!
            $timeout(emitLayout, 350);
          }
        }

      };
    }]);
