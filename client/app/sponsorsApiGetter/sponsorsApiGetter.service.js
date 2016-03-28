'use strict';

angular.module('hackIdcApp')
  .service('sponsorsApiGetter', function () {
    return {
      getData : function(){
        var data = [
          {
            name:'Amadeus',
            logoSrc:'../../assets/prizes-grid-photos/hamburg.jpg',
            description:'',
            anchor:'Amadeus'
          },
          {
            name:'Backand',
            logoSrc:'../../assets/prizes-grid-photos/berlin.jpg',
            description:'',
            anchor:'Backand'
          },
          {
            name:'Flying Cargo',
            logoSrc:'../../assets/prizes-grid-photos/ipad.jpg',
            description:'',
            anchor:'FlyingCargo'
          },
          {
            name:'RapidAPI',
            logoSrc:'../../assets/icons/tbd.png',
            description:'',
            anchor:'RapidAPI'
          }
        ];
        return data;
      }
    };
  });
