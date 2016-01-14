'use strict';

angular.module('hackIdcApp')
  .directive('mobileNav', ['$document',function ($document) {
    return {
      templateUrl: 'app/mobile-nav/mobile-nav.html',
      restrict: 'E',
      link: function (scope, element, attrs) {
        var links = attrs.links;
        var gridContainer = angular.element(element[0].querySelector('#grid-bg'));
        var pageBody = angular.element($document[0].body);

        scope.bgColor = attrs.triggerFabColor || 'rgb(255,87,34)';
        scope.bgGridColor = attrs.bgGridColor || 'rgba(0,0,0,0.5)';



        scope.displayGrid = function(){

          gridContainer.css('display','block');
          pageBody.css('overflow','hidden');
        };
        scope.hideGrid = function(){
          gridContainer.css('display','none');
          pageBody.css('overflow','auto');
        };
      }
    };
  }]);
