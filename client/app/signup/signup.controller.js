'use strict';

angular.module('hackIdcApp')

  .controller('SignupCtrl',  ['$scope','isMobile','$rootScope','$location',
      function ($scope,isMobile,$rootScope,$location) {
        $scope.mobileLinks =[{
          iconClass: 'fa-home',
          label : 'Home',
          action :  function(){
            $location.path( '/home' )
          },
          actionArgs: 'home',
          bgColor:'#2185D5'
        }];


        $scope.isMobile = isMobile.isMobile();
        $scope.timeToCount = (function(){
          return Math.round((new Date('02/01/2016') -new Date())/1000);
        })();
      }
    ]
  );
