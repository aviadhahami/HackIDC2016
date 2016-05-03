/**
 * Created by aviad on 4/2/2016.
 */
'use strict';

angular.module('hackIdcApp')
  .controller('ScheduleCtrl',  ['$scope','isMobile',
    function ($scope,isMobile) {
      $scope.isMobile = isMobile.isMobile();
      $scope.friday=[
        {
          what:'Registration',
          when:'08:00',
          where:'Psychology Building Lobby'
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
          where:'Outside Psychology Building'
        },
        {
          what:'How To Pitch',
          when:'15:00',
          where:'PEB20'
        },
        {
          what:'Friday Dinner',
          when:'19:30',
          where:'Outside Psychology Building'
        }
      ];

      $scope.saturday = [

        {
          what:'Midnight Meal',
          when:'00:30',
          where:'Outside Psychology Building'
        },
        {
          what:'Surprise Snack',
          when:'03:00',
          where:'Psychology Building Lobby'
        },
        {
          what:'Breakfast',
          when:'07:00',
          where:'Outside Psychology Building'
        },
        {
          what:'Yoga Session',
          when:'09:30',
          where:'Outside Arison Building'
        },
        {
          what:'Lunch',
          when:'12:00',
          where:'Outside Psychology Building'
        },
        {
          what:'Snack',
          when:'16:00',
          where:'Outside Psychology Building'
        },
        {
          what:'Hacking Ends',
          when:'17:30',
          where:'Psychology Building'
        },
        {
          what:'Judging Round 1',
          when:'18:00',
          where:'Psychology Building'
        },
        {
          what:'Dinner',
          when:'19:00',
          where:'Outside Psychology Building'
        },
        {
          what:'Final Judging and Closing Ceremony',
          when:'20:00',
          where:'PEB20'
        }
      ];

    }]);
