'use strict';

angular.module('hackIdcApp')
  .controller('MainCtrl',  ['$scope','$window','$timeout','$document','isMobile','$location','$rootScope',
    function ($scope,$window,$timeout,$document,isMobile,$location,$rootScope) {
      $scope.isMobile = isMobile.isMobile();



      // Workaround for the fittext thing
      $timeout(function(){
        $scope.titles = {
          //mainTitle : 'Welcome to HackIDC 2016',
          mainTitle : 'HackIDC 2016',
          eventDate : ' May 6-7, 2016 ',
          eventLine : 'Israel\'s Leading Student Hackathon',
          description : 'What is HackIDC?',
          prizes : 'Prizes',
          sponsors : 'Sponsors',
          team : 'Team',
          mentorship :'Mentorship'
        };
        $scope.content= {
          descriptionContent : "HackIDC is the first national student hackathon in Israel. It is the biggest hackathon in Israel and it’s run by students from the IDC. This hackathon is an event that brings together software,hardware, and design enthusiasts to create new and innovative applications or services from scratch in 36 hours. It is an opportunity to meet and learn from people from different backgrounds and schools and an opportunity to learn from mentors that come from the top companies in the high tech industry in Israel. Ultimately it is a fun & professional experience.",
          mentorshipContent:{
            A : 'HackIDC will operate a special mentorship program, targeting those who want to participate in a hackathon but still needs to work on their development skills.',
            B :'The program\'s goal is to provide the participants with the tools necessary to build a prototype, in the timeframe of a hackathon.To achieve that we will host several sessions with top developers from hi­tech companies, some sessions will be dedicated to provide the participants with practical knowledge, while others will focus on hackathons in general, and how to prototype correctly.Once the hackathon begins, onsite mentors will be available to provide additional assistance and guidance.'
          }
        };
      },2000);

// Flush all changes, one second in
      $timeout(function(){
        $scope.$apply();
      },5000);

      $scope.video = {
        id : 'h_2iNc_-dDk'
      };

      $scope.scrollTo = function(location){
        console.log(location);
        console.log(angular.element(document.getElementById(location)));
        var offset = -10;
        $document.scrollToElementAnimated(angular.element(document.getElementById(location)), offset, 200);
      };

      $rootScope.mobileLinks = [
        {
          iconClass: 'fa-home',
          label : 'Home',
          action : $scope.scrollTo,
          actionArgs: 'home',
          bgColor:'#2185D5'
        },
        {
          iconClass: 'fa-info',
          label : 'Description',
          action : $scope.scrollTo,
          actionArgs: 'description',
          bgColor : '#2185D5'
        },
        {
          iconClass: 'fa-trophy',
          label : 'Prizes',
          action : $scope.scrollTo,
          actionArgs: 'prizes',
          bgColor : '#2185D5'
        },
        {
          iconClass: 'fa-pencil',
          label : 'Register',
          action : function(){
            $location.path( '/signup' );
          },
          actionArgs: '',
          bgColor: '#2185D5'
        },
        {
          iconClass: 'fa-graduation-cap',
          label : 'Mentorship',
          action : $scope.scrollTo,
          actionArgs: 'mentorship',
          bgColor: '#2185D5'
        }
      ];
      $scope.mobileLinks = $rootScope.mobileLinks;
    }]);
