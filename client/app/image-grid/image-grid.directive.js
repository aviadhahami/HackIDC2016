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
          scope.gridOpts = {
            swapping: false,
            draggable: {
              enabled: false
            }
          };



          scope.isMobile = isMobile.isMobile();
          scope.sponsorsData = sponsorsApiGetter.getData();

          scope.tiles = {
            1: false,
            2:false,
            3:false,
            4:false
          };
          scope.chevrons={
            0:'fa-chevron-down',
            1:'fa-chevron-down',
            2:'fa-chevron-down',
            3:'fa-chevron-down',
            4:'fa-chevron-down'
          };
          scope.toggleChevron= function(index){
            scope.chevrons[index] = scope.chevrons[index] === 'fa-chevron-down' ? 'fa-chevron-up' : 'fa-chevron-down';
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
