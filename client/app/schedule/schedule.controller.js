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

    }]);
