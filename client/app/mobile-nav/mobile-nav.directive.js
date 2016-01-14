'use strict';

angular.module('hackIdcApp')
  .directive('mobileNav', ['$document',function ($document) {
    return {
      templateUrl: 'app/mobile-nav/mobile-nav.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        scope.isGridVisible = false;
        var links = attrs.links;
        var gridContainer = angular.element(element[0].querySelector('#grid-bg'));
        var pageBody = angular.element($document[0].body);

        scope.bgColor = attrs.triggerFabColor || 'rgb(255,87,34)';
        scope.bgGridColor = attrs.bgGridColor || 'rgba(0,0,0,0.5)';



        scope.toggleGrid = function(){
          if(scope.isGridVisible){
            hideGrid()
          }else{
            displayGrid()
          }
        };
        var displayGrid = function(){
          scope.isGridVisible =true;
          gridContainer.css('opacity','1');
          pageBody.css('overflow','hidden');

        };
        var hideGrid = function(){
          scope.isGridVisible=false;
          gridContainer.css('opacity','0');
          pageBody.css('overflow','auto');
        };
      }
    };
  }]);
