/**
 * Created by aviad on 3/23/2016.
 */
angular.module('hackIdcApp')
  .controller('apiPrizesCtrlr',['$scope','isMobile','$location',function($scope,isMobile,$location){
    $scope.isMobile = isMobile.isMobile();

    $scope.pageDescription='';


    $scope.cardWidthClass = !$scope.isMobile ? 'seventy-present-width' : 'fullWidth';
    var apis = [
      {
        title:'Amadeus',
        companyName:'Amadeus',
        info:'To be announced',
        link:'',
        logo:'../../assets/logos/amadeus_logo_transparent.png',
        id:'Amadeus'
      },
      {
        title:'RapidAPI',
        companyName:'RapidAPI',
        info:'To be announced',
        link:'',
        logo:'../../assets/logos/rapid-api-logo.png',
        id:'RapidAPI'
      }
      ,{
        title:'iPad mini Wi-Fi Cellular',
        companyName:'Flying Cargo',
        info:'Offers a variety of Logistic activities and acts not only as an Operator, but also as a lead player in the supply chain management arena.<br>We are here to offer start-up our advanced logistics services',
        link:'https://www.flying-cargo.com/he',
        logo:'../../assets/logos/fc_logo.png',
        id:'FlyingCargo'
      },
      {
        title:'Roundtrip flight tickets to Berlin',
        companyName:'Backand',
        info:'Backand challenge is simple! All you need to do is to use our service as the Backand for your project and you can enter the challenge!<br>The winner team will be the one who made the most use and complicated implementation of Backand. Bonus points will be given to each main feature Backand has to offer (use of real-time, actions, queries, hosting and much more)',
        link:'http://www.backand.com',
        logo:'../../assets/logos/backand-logo.png',
        id:'Backand'
      }
    ];
// Mobile links directive config
//   TODO: add links to each sponsor's gift
    var mobileLinks = [{
      iconClass: 'fa-home',
      label : 'Home',
      action :  function(){
        $location.path( '/home' )
      },
      actionArgs: 'home',
      bgColor:'#2185D5'
    }];



    $scope.apis = apis;
    $scope.mobileLinks = mobileLinks;

  }]);

