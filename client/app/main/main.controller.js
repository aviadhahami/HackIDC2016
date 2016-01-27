'use strict';

angular.module('hackIdcApp')
  .controller('MainCtrl',  ['$scope','$window','$timeout','$document','isMobile','$location','$rootScope',
    function ($scope,$window,$timeout,$document,isMobile,$location,$rootScope) {
      $scope.isMobile = isMobile.isMobile();

      // Might need to bind these with ng-bind-html
      var FAQ =[
        {
          title: 'How much does it cost to participate?',
          content: 'Nothing. Zero. Nil. Just bring your laptop, creativity and passion.<br><br>We will provide you with swag, meals, drinks, snacks, unlimited coffee and a place to crash when you need a break from hacking. '
        },
        {
          title:'Is there a specific theme for the Hackathon?',
          content: 'We’ll suggest ideas and themes leading up to the Hackathon, as well as during the event.'
        },
        {
          title:'What about students without programming experience?',
          content: 'You are a great part of the reason we are doing this!<br>This is your chance to turn your CS101 Knowledge into a real deal.<br><br>We have lots of resources to help beginners. Check out our <a href="#mentorship" class="mc-light-blue weight-300" du-smooth-scroll>Mentorship</a> section for more information.'
        },
        {
          title: 'What am I expected to build?',
          content: 'Thirty-six hours isn’t much, but surely enough to bring something to life. You are expected to finish a first version of your product within that time.<br> This can be a demo, POC or a beta version.<br>All work eligible for prizes must be completed between Friday morning after the kick-off and Saturday night at the hacking location (IDC Herzliya Campus).'
        },
        {
          title:'What about hardware projects?',
          content: 'We fancy them.<br>We’ll provide you with some valuable hardware to work on and some basic equipment.<br>We’ll put out a list closer to the event so you can see what’s available. You are welcome to bring along any gear of your own, just contact us about it first.'
        },
        {
          title:'What if I don’t have a team?',
          content: 'We will contact you after application results are announced.<br><br>You can decide whether we team you up or you find a team on your own.<br><br>You can join an existing team or construct one through HackIDC Hackers 2016 Facebook group we assemble closer to the event.'
        },
        {
          title:'What can I win?',
          content: 'You mean other than the opportunity to meet awesome people and learn from mentors of some of the world’s most influential companies? <br><br>A panel of professional judges will select the best three projects based on the following criteria: creativity, technical difficulty, aesthetics and function.<br><br>Top <a href="#prizes" du-smooth-scroll class="mc-light-blue weight-300">prizes</a> involve financial giveaways. Sponsors also offer their own prizes for specific categories, which they judge and fund themselves. '
        },
        {
          title:'Who runs HackIDC?',
          content: 'HackIDC is run entirely by students of the Interdisciplinary Center Herzliya.<br><br>With great assistance from our partners at the Student Union and Entrepreneurship Club, and funding of corporate <a href="#sponsors" class="mc-light-blue weight-300" du-smooth-scroll="">sponsor</a> donations, we aspire to bring you the leading student Hackathon in Israel. '
        },
        {
          title:'I have one more question...',
          content: 'We’re here for you!<br><br>Contact us at <a href="mailto:contact@hackidc.com" class="mc-light-blue weight-300">contact@hackidc.com</a> or via <a class="mc-light-blue weight-300" href="https://www.facebook.com/HackIDC" target="_blank">Facebook</a> messenger.<br><br><i>If you are looking for a specific team member, you can find us <a href="#team" du-smooth-scroll="" class="mc-light-blue weight-300">here</a>.</i>'
        }
      ];
      $scope.FAQ = FAQ;

      $scope.team = [
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        },
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        },
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        },
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        },
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        },
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        },
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        },
        {
          name:'Soon',
          imgSrc : '../../assets/images/member-stub.png',
          linkedin:'http://soon.com',
          mail:'me@there.com'
        }

      ];
      $scope.showQuestions= false;

      $scope.mentorshipFAQ = [
        {
          title:'What is the Mentorship program?',
          content: 'As part of the agenda of promoting talented students, HackIDC offers a pre-Hackathon training program. The program is intended to guide young programmers, who wish to turn their basic coding skills into real experience, through their first Hackathon.'
        },
        {
          title:'What does the program include?',
          content:'The program\'s goal is to provide the participants with the tools necessary to build a prototype in a short time frame.<br><br>To achieve that, we will host several hands-on workshops with some of the top developers in the tech industry. We will focus on prototype development, with an emphasis on eye level practice sessions.<br><br>During the Hackathon itself, onsite designated mentors will provide close assistance and guidance.'
        },
        {
          title:'Who should apply?',
          content:'The program currently accepts Interdisciplinary Center Herzliya students only. If you wish to participate in the Hackathon and have technical background but little to no experience, this program is for you.<br><br>Just check the “I want to be part of the mentorship program” box when submitting the registration form. We will contact you once the application results are announced.<br><br>Be advised that you will be required to attend 5 to 6 weekly sessions in the weeks preceding the Hackathon. We expect you to meet this requirement so we can advance your skills to a Hackathon Hacker level.'
        }
      ];


      // Workaround for the fittext thing
      $timeout(function(){
        $scope.titles = {
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
          sponsorsSub:'Those who make it possible',
          mentorshipContent:'A program for highly-motivated newbies',
          prizesSub : 'To feed the motivation',
          teamSub : 'From the people who brought you Shrek'
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
          iconClass: 'fa-heart',
          label : 'Sponsors',
          action : $scope.scrollTo,
          actionArgs: 'sponsors',
          bgColor : '#2185D5'
        },
        {
          iconClass: 'fa-graduation-cap',
          label : 'Mentorship',
          action : $scope.scrollTo,
          actionArgs: 'mentorship',
          bgColor: '#2185D5'
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
          iconClass: 'fa-users',
          label : 'Team',
          action : $scope.scrollTo,
          actionArgs: 'team',
          bgColor : 'rgba(33, 133, 213, 0.12)', //TODO: change alpha to '1' when team is back
          disabled : 'true'
        }

      ];
      $scope.mobileLinks = $rootScope.mobileLinks;
    }]);
