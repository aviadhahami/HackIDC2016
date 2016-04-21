/**
 * Created by aviad on 4/2/2016.
 */
'use strict';

angular.module('hackIdcApp')
  .controller('ScheduleCtrl',  ['$scope','isMobile',
    function ($scope,isMobile) {
      $scope.isMobile = isMobile.isMobile();
      $scope.friday=[
        {what:'Arrival',
        when:'08:00',
        where:'IDC Campus'},

        {what:'Arrival',
          when:'08:00',
          where:'IDC Campus'},
        {what:'Arrival',
          when:'08:00',
          where:'IDC Campus'}
      ];

      $scope.saturday = [
        {what:'Finish',
          when:'20:00',
          where:'IDC Campus'}
      ];

    }]);
