'use strict';

angular.module('hackIdcApp')
  .controller('MainCtrl',  ['$scope','$window','$timeout','$document','isMobile','$location','$rootScope','sponsorsApiGetter',
    function ($scope,$window,$timeout,$document,isMobile,$location,$rootScope,sponsorsApiGetter) {
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
          title:'About IEC',
          content: 'The IDC Entrepreneurship Club is a student-run platform for creating and encouraging entrepreneurship among IDC Herzliya students and nurturing a culture of entrepreneurship on campus.<br>The club strives to provide each student with practical tools and knowledge in various fields of entrepreneurship.'
        },
        {
          title:'I have one more question...',
          content: 'We’re here for you!<br><br>Contact us at <a href="mailto:contact@hackidc.com" class="mc-light-blue weight-300">contact@hackidc.com</a> or via <a class="mc-light-blue weight-300" href="https://www.facebook.com/HackIDC" target="_blank">Facebook</a> messenger.<br><br><i>If you are looking for a specific team member, you can find us <a href="#team" du-smooth-scroll="" class="mc-light-blue weight-300">here</a>.</i>'
        }
      ];
      $scope.FAQ = FAQ;

      $scope.team = [
        {
          name:'Aj Neuhar',
          imgSrc : '../../assets/team-photos/aj.jpg',
          linkedin:'http://linkedin.com/in/aj-neuhar-47184a72',
          mail:'mailto:aj@hackidc.com'
        },
        {
          name:'Aviya Sela',
          imgSrc : '../../assets/team-photos/aviya.jpg',
          linkedin:'http://linkedin.com/in/aviyasela',
          mail:'mailto:aviya@hackidc.com'
        },
        {
          name:'Ran Alter',
          imgSrc : '../../assets/team-photos/ran.jpg',
          linkedin:' https://il.linkedin.com/in/ran-alter-0a174a4b',
          mail:'ran@hackidc.com'
        },
        {
          name:'Omri Gotlieb',
          imgSrc :  '../../assets/team-photos/gotlib.jpg',
          linkedin:' https://il.linkedin.com/in/omri-gotlieb-2930579b',
          mail:'mailto:omrigotlieb@gmail.com'
        },
        {
          name:'Shay Goldman',
          imgSrc :'../../assets/team-photos/goldman.jpg',
          linkedin:'https://il.linkedin.com/in/shay-goldman-7404895b',
          mail:'mailto:shay@hackidc.com'
        },
        {
          name:'Yuval Desheh',
          imgSrc : '../../assets/team-photos/deshe.jpg',
          linkedin:'https://il.linkedin.com/in/yuval-desheh-98066878',
          mail:'mailto:desheh@hackidc.com'
        },
        {
          name:'Yarden Moalem',
          imgSrc : '../../assets/team-photos/yarden.jpg',
          linkedin:'https://il.linkedin.com/in/yarden-moalem-5a489289',
          mail:'mailto:yarden@hackidc.com'
        },
        {
          name:'Jonatan Meczyk',
          imgSrc : '../../assets/team-photos/mexic.jpg',
          linkedin:'https://il.linkedin.com/in/jonatan-meczyk-a8876910b',
          mail:'mailto:Joni@hackidc.com'
        },
        {
          name:'Elad Patt',
          imgSrc : '../../assets/team-photos/elad.jpg',
          linkedin:'https://www.linkedin.com/in/elad-patt-16b882a8',
          mail:'mailto:elad@hackidc.com'
        },
        {
          name:'Avihay Bar',
          imgSrc : '../../assets/team-photos/avichi.jpg',
          linkedin:'https://il.linkedin.com/in/avihaybar',
          mail:'mailto:avihay@hackidc.com'
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
          content:'The program currently accepts students from IDC Herzliya.. If you wish to participate in the Hackathon and have technical background but little to no experience, this program is for you.<br><br>Just check the “I want to be part of the mentorship program” box when submitting the registration form. We will contact you once the application results are announced.<br><br>Be advised that you will be required to attend 5 to 6 weekly sessions in the weeks preceding the Hackathon. We expect you to meet this requirement so we can advance your skills to a Hackathon Hacker level.'
        }
      ];

      $scope.friday=[
        {
          what:'Registration',
          when:'08:00',
          where:'Lobby'
        },
        {
          what:'Opening Ceremony',
          when:'09:00',
          where:'PEB20'
        },
        {
          what:'Hacking Starts!',
          when:'10:00',
          where:'Psychology Building'
        },
        {
          what:'Lunch',
          when:'13:00',
          where:'Outside'
        },
        {
          what:'How To Pitch',
          when:'15:00',
          where:'PEB20'
        },
        {
          what:'Friday Dinner',
          when:'19:30',
          where:'Outside'
        },

        {
          what:'Midnight Meal',
          when:'00:30',
          where:'Outside'
        },
        {
          what:'Surprise Snack',
          when:'03:00',
          where:'Lobby'
        }
      ];

      $scope.saturday = [
        {
          what:'Breakfast',
          when:'07:00',
          where:'Outside'
        },
        {
          what:'Yoga Session',
          when:'09:30',
          where:'Arison Building'
        },
        {
          what:'Lunch',
          when:'12:00',
          where:'Outside'
        },
        {
          what:'Snack',
          when:'16:00',
          where:'Outside'
        },
        {
          what:'Hacking Ends',
          when:'17:00',
          where:''
        },
        {
          what:'Judging Round 1',
          when:'17:30',
          where:''
        },
        {
          what:'Dinner',
          when:'18:30',
          where:'Outside'
        },
        {
          what:'Final Judging and Closing Ceremony',
          when:'19:30',
          where:'PEB20'
        }
      ];

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
        teamSub : ''
      };

      $scope.sponsorsApiArr = sponsorsApiGetter.getData();

      $scope.scrollTo = function(location){

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
          iconClass: 'fa-calendar',
          label : 'Schedules',
          action :$scope.scrollTo,
          actionArgs: 'schedule',
          bgColor: '#2185D5'
        },
        {
          iconClass: 'fa-users',
          label : 'Team',
          action : $scope.scrollTo,
          actionArgs: 'team',
          bgColor : 'rgba(33, 133, 213, 1)',
          disabled : 'false'
        }
      ];
      $scope.mobileLinks = $rootScope.mobileLinks;
    }]);
