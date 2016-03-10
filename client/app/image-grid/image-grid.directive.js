'use strict';

angular.module('hackIdcApp')
  .directive('imageGrid', ['isMobile',function (isMobile) {
    return {
      templateUrl: 'app/image-grid/image-grid.html',
      restrict: 'E',
      scope:{
        data: '='
      },
      link: function (scope, element, attrs) {
        scope.isMobile = isMobile.isMobile();
        console.log(scope.data);
        console.log('run');

        scope.calcFlexSize = (function(){
          var res;
          if(scope.isMobile){
            res = "0";
          }else if(scope.data.length %3 !== 0){
            res = "33";
          }
          console.log(res);
          return res;
        })();
      }
    };
  }]);
