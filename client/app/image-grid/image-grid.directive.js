'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid', ['isMobile','sponsorsApiGetter','$interval',function (isMobile,sponsorsApiGetter,$interval) {
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

        $interval(function(){
          scope.sponsorsData.push({
            companyName:Math.floor((Math.random() * 10) + 1),
            prizeTitle:Math.floor((Math.random() * 100) + 1)
          });
        },1550);
      }
    };
  }]);
