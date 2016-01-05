'use strict';

angular.module('hackIdcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('sponsors', {
        url: '/sponsors',
        templateUrl: 'app/sponsors/sponsors.html',
        controller: 'SponsorsCtrl'
      });
  });