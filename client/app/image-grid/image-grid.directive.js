'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid',['isMobile','sponsorsApiGetter','$timeout','$window',
    function (isMobile,sponsorsApiGetter,$timeout,$window) {
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
          function updateHeightFactor(){

            scope.heightBiggerThanWidth = document.body.offsetHeight >document.body.offsetWidth;
          }
          updateHeightFactor();

          var win = angular.element($window);
          win.bind("resize",function(e){
          console.log('event!');
            updateHeightFactor();
          });



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
