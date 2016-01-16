'use strict';

angular.module('hackIdcApp')

  .controller('SignupCtrl',  ['$scope','isMobile','$rootScope','$location','$mdDialog','$http',
      function ($scope,isMobile,$rootScope,$location,$mdDialog,$http) {
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



        $scope.submit = function(data){
          console.log(data);
          $scope.formData = {
            firstName : data.firstName.$modelValue,
            lastName : data.lastName.$modelValue,
            gender : data.gender,
            mail : data.email.$modelValue,
            phone:  '\'' + data.phone.$modelValue, // Important to keep the apostrophe in order to display as string
            academicInstitution:data.school,
            shirtSize :data.shirtSize,
            diet : data.diet,
            linkToProject :  data.pastProject.$modelValue,
            heardFrom : data.heardFrom,
            intrestReason :  data.interestReason.$modelValue,
            gotTeam : data.gotTeam,
            teamLeaderMail :  (function(){
              if(data.hasOwnProperty('teamLeaderMail')){
                return data.teamLeaderMail.$modelValue
              }else{
                return ''
              }
            })(),
            needMentor: !!data.needMentor ? 'yes' : 'no'
          };
          console.log ($scope.formData);

          var url = 'https://sheetsu.com/apis/89ab6aa2';
          var req = {
            method: 'POST',
            url: url,
            headers: {
              'Content-Type': 'application/json'
            },
            data: $scope.formData
          };
          console.log('introduction http')
          $http(req).then(function(res){
            console.log(res);
          }, function(err){
            console.log(err);
          });

        };
      }
    ]
  );
