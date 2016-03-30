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

          scope.calcFlexSize = scope.isMobile ? 0 : 20;
          scope.enlarge = function(event){
            var elem = angular.element(event.target);
            elem.toggleClass('big-tile');
          };
          // var $grid = element.masonry();
          // element.on('click','.grid-item',function(){
          //   $grid.masonry();
          // })

        }
      };
    }]);
