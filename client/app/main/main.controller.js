'use strict';

angular.module('hackIdcApp')
  .controller('MainCtrl',  ['$scope','$window','$timeout','$document','isMobile',
    function ($scope,$window,$timeout,$document,isMobile) {
      $scope.isMobile = isMobile.isMobile();



      // Workaround for the fittext thing
      $timeout(function(){
        $scope.titles = {
          mainTitle : 'Welcome to HackIDC 2016',
          description : 'What is HackIDC?',
          prizes : 'Prizes',
          sponsors : 'Sponsors',
          team : 'Team'
        };
        $scope.content= {
          descriptionContent : "HackIDC is the first national student hackathon in Israel. It is the biggest hackathon in Israel and it’s run by students from the IDC. This hackathon is an event that brings together software,hardware, and design enthusiasts to create new and innovative applications or services from scratch in 36 hours. It is an opportunity to meet and learn from people from different backgrounds and schools and an opportunity to learn from mentors that come from the top companies in the high tech industry in Israel. Ultimately it is a fun & professional experience."
        };
      },1000);

// Flush all changes, one second in
      $timeout(function(){
        $scope.$apply();
      },1000);

      $scope.video = {
        id : 'h_2iNc_-dDk'
      };

      $scope.scrollTo = function(location){
        var offset = -10;
        $document.scrollToElementAnimated( angular.element(document.getElementById(location)), offset, 200);
      };

      $scope.mobileLinks = [
        {
          iconClass: 'fa-home',
          label : 'home',
          action : scrollTo,
          actionArgs: '#home'
        },
        {
          iconClass: 'fa-info',
          label : 'description',
          action : scrollTo,
          actionArgs: '#description'
        },
        {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },
        // Dummies
        {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },  {
          iconClass: 'fa-trophy',
          label : 'prizes',
          action : scrollTo,
          actionArgs: '#prizes'
        },
      ];

    }]);
