'use strict';

angular.module('hackIdcApp')
  .directive('mobileNav', ['$document','$timeout',function ($document,$timeout) {
    return {
      templateUrl: 'app/mobile-nav/mobile-nav.html',
      restrict: 'E',
      scope:{
        links: '='
      },
      link: function (scope, element, attrs) {
        scope.isGridVisible = false;



        var gridContainer = angular.element(element[0].querySelector('#grid-bg'));

        scope.bgColor = attrs.triggerFabColor || 'rgb(255,87,34)';
        scope.bgGridColor = attrs.bgGridColor || 'rgba(1,1,1,0.9';

        scope.toggleGrid = function(){
          if(scope.isGridVisible){
            hideGrid()
          }else{
            displayGrid()
          }
        };
        var displayGrid = function(){
          scope.isGridVisible =true;
          gridContainer.css('left','0');
          gridContainer.css('opacity','1');
        };
        var hideGrid = function(){
          scope.isGridVisible=false;
          gridContainer.css('left','100%');
          gridContainer.css('opacity','0');
        };
      }
    };
  }]);
