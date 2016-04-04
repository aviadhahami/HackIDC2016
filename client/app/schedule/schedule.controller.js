/**
 * Created by aviad on 4/2/2016.
 */
'use strict';

angular.module('hackIdcApp')
  .controller('ScheduleCtrl',  ['$scope','isMobile',
    function ($scope,isMobile) {
      $scope.isMobile = isMobile.isMobile();
      $scope.times=[
        {}
      ];
      $scope.mentorship = [
        {
          date:'06.04',
          time:'18:30',
          venue:'TBA',
          duration:'2.5 hours'
        },
        {
          date:'10.04',
          time:'18:30',
          venue:'TBA',
          duration:'2.5 hours'
        },
        {
          date:'13.04',
          time:'18:30',
          venue:'TBA',
          duration:'2.5 hours'
        },
        {
          date:'01.05',
          time:'18:30',
          venue:'TBA',
          duration:'2.5 hours'
        },
        {
          date:'02.05',
          time:'18:30',
          venue:'TBA',
          duration:'2.5 hours'
        },
      ];

    }]);
