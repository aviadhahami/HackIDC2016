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

          // Forcing isotope render
          var iso = angular.element(document.getElementById('isotope-container'));
          iso.isotope({
            layoutMode: 'masonry'
          });

          var isoOptions = function(){
            scope.$emit('iso-option', {
              layoutMode: 'masonry'
            });
          };

          var emitLayout = function () {
            scope.$emit('iso-method', {name:'layout',params:null});
          };


          $timeout(isoOptions,50);
          scope.sponsorsData = sponsorsApiGetter.getData();
          scope.isMobile = isMobile.isMobile();
          scope.bricks=  scope.sponsorsData;




          scope.isLandscape = scope.isMobile && (document.body.offsetHeight < document.body.offsetWidth);
          var win = angular.element($window);
          win.bind("resize",function(e){
            scope.isLandscape = scope.isMobile && (document.body.offsetHeight < document.body.offsetWidth);
          });



          scope.toggle = function(brick){
            brick.toggle = !brick.toggle;

            // IMPORTANT! timeout MUST be larger than animation time!
            $timeout(emitLayout, 350);
          }
        }

      };
    }]);
