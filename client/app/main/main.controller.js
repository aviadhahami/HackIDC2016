'use strict';

angular.module('hackIdcApp')
  .controller('MainCtrl',  ['$scope','$window','$timeout','$document','isMobile','$location','$rootScope',
    function ($scope,$window,$timeout,$document,isMobile,$location,$rootScope) {
      $scope.isMobile = isMobile.isMobile();

      // Might need to bind these with ng-bind-html
      var FAQ =[
        {
          title:'Who can register',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'What is HackIDC',
          content: 'I\'ve said it once, I\'ve said it twice, I\'ve said it a thousand fucking times That I\'m OK, that I\'m fine, that it\'s all just in my mind But this has got the best of me, and I can\'t seem to sleep It\'s not \'cause you\'re not with me, it\'s \'cause you never leave'
        },
        {
          title:'When will I know if I got in?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'What can I win?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'What am I expected to build?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'How are the projects being judged',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'How much does it cost to participate?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'Once I get in, what should I bring?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'Is there a specified theme for the Hackathon?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'I\'m a CS student without much experience, should I apply?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'Who runs HackIDC?',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        },
        {
          title:'I have one more question',
          content: 'Keep on moving to the first rays of dawn Keeping it on \'til the day stays strong Runnin \'til the night time blazes on All along I keep singing my song I said, this phase is always Sometimes I get so crazed But just know that I\'ll always stay \'Cause you\'re my light through the haze'
        }

      ];
      $scope.FAQ = FAQ;




      // Workaround for the fittext thing
      $timeout(function(){
        $scope.titles = {
          //mainTitle : 'Welcome to HackIDC 2016',
          mainTitle : 'HackIDC 2016',
          eventDate : ' May 6-7, 2016 ',
          eventLine : 'Israel\'s Leading Student Hackathon',
          description : 'FAQ',
          prizes : 'Prizes',
          sponsors : 'Sponsors',
          team : 'Team',
          mentorship :'Mentorship'
        };
        $scope.content= {
          descriptionContent :'Information you might need to know',
          sponsorsSub:'Those who make it happen',
          mentorshipContent:{
            A : 'HackIDC will operate a special mentorship program, targeting those who want to participate in a hackathon but still needs to work on their development skills.',
            B :'The program\'s goal is to provide the participants with the tools necessary to build a prototype, in the timeframe of a hackathon.To achieve that we will host several sessions with top developers from hi­tech companies, some sessions will be dedicated to provide the participants with practical knowledge, while others will focus on hackathons in general, and how to prototype correctly.Once the hackathon begins, onsite mentors will be available to provide additional assistance and guidance.'
          }
        };
      },0);


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
