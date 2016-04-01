/**
 * Created by aviad on 4/2/2016.
 */
'use strict';

angular.module('hackIdcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('schedule', {
        url: '/schedule',
        templateUrl: 'app/schedule/schedule.html',
        controller: 'ScheduleCtrl'
      });
  });
