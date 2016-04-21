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
        scope.sponsorsData = sponsorsApiGetter.getData();
        scope.isMobile = isMobile.isMobile();

          scope.gridOpts = {
            columns:scope.sponsorsData.length*2,
            width:'auto',
            colWidth: 'auto', // can be an integer or 'auto'.  'auto' uses the pixel width of the element divided by 'columns'
            rowHeight: 'match',
            margins: [10, 10],
            outerMargin: true,
            isMobile:  scope.isMobile,
            mobileBreakPoint: 600, // if the screen is not wider that this, remove the grid layout and stack the items
            mobileModeEnabled: true, // whether or not to toggle mobile mode when screen width is less than mobileBreakPoint
            minColumns: 1, // the minimum columns the grid must have
            minRows: 2, // the minimum height of the grid, in rows
            defaultSizeX: 2, // the default width of a gridster item, if not specifed
            defaultSizeY: 1, // the default height of a gridster item, if not specified
            minSizeX: 1, // minimum column width of an item
            maxSizeX: null, // maximum column width of an item
            minSizeY: 1, // minimum row height of an item
            maxSizeY: null, // maximum row height of an item
            swapping: false,
            resizable: {
              enabled: false,
              handles: ['n', 'e', 's', 'w', 'ne', 'se', 'sw', 'nw'],
              start: function(event, $element, widget) {}, // optional callback fired when resize is started,
              resize: function(event, $element, widget) {}, // optional callback fired when item is resized,
              stop: function(event, $element, widget) {} // optional callback fired when item is finished resizing
            }
          };




        for (var i=0;i<scope.sponsorsData.length;i++){

          scope.sponsorsData[i].sizeX = '1';
          scope.sponsorsData[i].sizeY = '1';
          // scope.sponsorsData[i].row = i;
          // scope.sponsorsData[i].col = '0';
        }


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
