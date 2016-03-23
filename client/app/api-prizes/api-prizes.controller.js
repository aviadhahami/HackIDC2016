/**
 * Created by aviad on 3/23/2016.
 */
angular.module('hackIdcApp')
  .controller('apiPrizesCtrlr',['$scope','isMobile',
    function($scope,isMobile){
      $scope.isMobile = isMobile.isMobile();

      $scope.pageDescription='';


      $scope.cardWidthClass = !$scope.isMobile ? 'seventy-present-width' : 'fullWidth';
      var apis = [
        {
          title:'RapidAPI',
          info:'To be announced',
          link:'http://google.com/',
          logo:'../../assets/logos/rapid-api-logo.png'
        },
        {},
        {},
        {}
      ];
      $scope.apis = apis;

    }]);
