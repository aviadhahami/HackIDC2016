/**
 * Created by aviad on 3/23/2016.
 */
angular.module('hackIdcApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('api-prizes', {
        url: '/api-prizes',
        templateUrl: 'app/api-prizes/api-prizes.html',
        controller: 'apiPrizesCtrlr'
      });
  });
