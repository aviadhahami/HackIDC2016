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
          companyName:'RapidAPI',
          info:'To be announced',
          link:'',
          logo:'../../assets/logos/rapid-api-logo.png'
        },
        {
          title:'Roundtrip flight tickets to Berlin',
          companyName:'Backand',
          info:'Backand challenge is simple! All you need to do is to use our service as the Backand for your project and you can enter the challenge!<br>The winner team will be the one who made the most use and complicated implementation of Backand. Bonus points will be given to each main feature Backand has to offer (use of real-time, actions, queries, hosting and much more)',
          link:'http://www.backand.com',
          logo:'../../assets/logos/backand-logo.png'
        },
        {},
        {}
      ];
      $scope.apis = apis;

    }]);
