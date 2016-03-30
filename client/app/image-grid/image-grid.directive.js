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

          scope.toggleBrick = function(event){
            console.log(event,event.target);

            // Inject Data

            //
          }
        }
      };
    }]);
