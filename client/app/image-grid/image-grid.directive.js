'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid', ['isMobile','sponsorsApiGetter',
    function (isMobile,sponsorsApiGetter) {
      return {
        templateUrl: 'app/image-grid/image-grid.html',
        restrict: 'E',
        scope:{
          data: '='
        },
        link: function (scope, element, attrs) {
          scope.isMobile = isMobile.isMobile();
          scope.sponsorsData = sponsorsApiGetter.getData();

          scope.tiles = {
            1: false,
            2:false,
            3:false,
            4:false
          };

          scope.toggleBrick = function(event,index){
            console.log(event,event.target);
            var tiles = scope.tiles;
            tiles[index] = !tiles[index];
            // Inject Data

            //
          }
        }
      };
    }]);
