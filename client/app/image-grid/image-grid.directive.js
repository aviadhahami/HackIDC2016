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
          scope.enlarge = function(elem){
            angular.element(elem)[0].style.height = '100px';
            // console.log(elem);
          };
        }
      };
    }]);
