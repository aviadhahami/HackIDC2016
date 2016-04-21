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



        scope.sponsorsData = sponsorsApiGetter.getData();
        for (var i=0;i<scope.sponsorsData.length;i++){

          scope.sponsorsData[i].sizeX = '1';
          scope.sponsorsData[i].sizeY = '1';
          // scope.sponsorsData[i].row = i;
          // scope.sponsorsData[i].col = '0';
        }
        scope.isMobile = isMobile.isMobile();

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
