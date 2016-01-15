'use strict';

angular.module('hackIdcApp')

  .controller('SignupCtrl',  ['$scope','isMobile','$rootScope','$location','$mdDialog',
      function ($scope,isMobile,$rootScope,$location,$mdDialog) {
        $scope.mobileLinks =[{
          iconClass: 'fa-home',
          label : 'Home',
          action :  function(){
            $location.path( '/home' )
          },
          actionArgs: 'home',
          bgColor:'#2185D5'
        }];
        $scope.schools =[
          "IDC Herzliya",
          "Academic College of Tel Aviv-Yafo",
          "Afeka College of Engineering",
          "Ariel University",
          "Ashkelon Academic College",
          "Bar-Ilan University",
          "Ben-Gurion University of the Negev",
          "Bezalel Academy of Art and Design",
          "College of Management Academic Studies",
          "Hebrew University of Jerusalem",
          "Jerusalem College of Engineering",
          "Max Stern Academic College of Emek Yezreel",
          "Netanya Academic College",
          "Oranim Academic College",
          "Ono Academic College",
          "Open University of Israel",
          "ORT Braude College of Engineering",
          "Sapir Academic College",
          "Sami Shamoon College of Engineering",
          "Shenkar College of Engineering and Design",
          "Technion - Israel Institute of Technology",
          "Tel Aviv University",
          "Tel-Hai Academic College",
          "University of Haifa",
          "Western Galilee College",
          "WIZO Haifa Academy of Design and Education",
          "Weizmann Institute of Science",
          "Avni Institute of Art and Design",
          "Other"
        ];
        $scope.isMobile = isMobile.isMobile();
        $scope.timeToCount = (function(){
          return Math.round((new Date('02/01/2016') -new Date())/1000);
        })();
      }
    ]
  );
