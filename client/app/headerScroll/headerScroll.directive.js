'use strict';
//'myModal', ['$log', function ($log, $window) {
angular.module('hackIdcApp')
  .directive('headerScroll', ['$window',function ($window) {
    return {
      restrict: 'A',
      link: function (scope) {
        angular.element($window).bind('scroll', function () {
            if (!scope.scrollPosition) {
              scope.scrollPosition = 0;
            }

            //if (this.pageYOffset > scope.scrollPosition) {
            //  scope.boolChangeClass = true;
            //} else {
            //  scope.boolChangeClass = false;
            //}
            // Will check if we're on the top or not
            //if (this.pageYOffset > 600) {
            //  scope.boolChangeClass = true;
            //} else {
            //  scope.boolChangeClass = false;
            //}
            scope.boolChangeClass = this.pageYOffset > 600 ? true : false;
            scope.scrollPosition = this.pageYOffset;
            scope.$apply();
          }
        );
      }
    };
  }]);
