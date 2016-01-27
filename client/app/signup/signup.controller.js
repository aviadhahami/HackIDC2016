'use strict';

angular.module('hackIdcApp')

  .controller('SignupCtrl',  ['$scope','isMobile','$rootScope','$location','$mdDialog','Upload','$http','$timeout',
      function ($scope,isMobile,$rootScope,$location,$mdDialog,Upload,$http,$timeout) {


        $scope.timeToGo = (new Date ("january 30 2016") - new Date())/1000;


        var fileUploadConfig = "";
        $scope.cvFileName = '';
        $scope.finalShow = {};




// upload on file select or drop
        $scope.upload = function (file) {
          $scope.cvFileName = file.name.length > 15? file.name.substr(0,15) + '...':file.name ;
          fileUploadConfig = {
            url: '/upload.php',
            data: {
              firstName: '',
              lastName: '',
              file: file
            }
          };
        };


        // Mobile links directive config
        $scope.mobileLinks =[{
          iconClass: 'fa-home',
          label : 'Home',
          action :  function(){
            $location.path( '/home' )
          },
          actionArgs: 'home',
          bgColor:'#2185D5'
        }];

        // Schools array of options holder
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

        // Time counter for timer
        $scope.timeToCount = (function(){
          return Math.round((new Date('02/01/2016') -new Date())/1000);
        })();


        $scope.submittingForm = false;
        $scope.submit = function(data){
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
          if(!fileUploadConfig){
            alert('Please make sure you upload your CV');
            return;
          }
          fileUploadConfig.data.firstName = $scope.formData.firstName;
          fileUploadConfig.data.lastName = $scope.formData.lastName;

          $scope.finalShow.isUploading = true;

          Upload.upload(fileUploadConfig)
            .then(function (res) {

              console.log(res)
              if(res.status == '200' && res.data.status =='200'){
                $scope.submittingForm = true;
                $scope.formData['cvLink'] = 'http://2016.hackidc.com/cvs/' + res.data.url;
              }else{
                alert('Error uploading the file, try again later');
                return;
              }
              // Post data to sheets
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
                $scope.finalShow = {
                  firstName :  $scope.formData.firstName,
                  lastName : $scope.formData.lastName,
                  mail : $scope.formData.mail,
                  phone : $scope.formData.phone,
                  isUploading : true,
                  finalText : 'Finalizing...'
                };
                $timeout(function(){
                  $scope.finalShow.isUploading = false;
                  $scope.finalShow.finalText = 'Done!';
                },10000);



              }, function(err){
                console.log(err);
              });

            }, function (err) {
              console.log(err);
            }, function (evt) {
              var progressPercentage = parseInt(100.0 * evt.loaded / evt.total);
              $scope.progressPercentage = progressPercentage;
              console.log('progress: ' + progressPercentage + '% ' + evt.config.data.file.name);
            });


        };
      }
    ]
  );
