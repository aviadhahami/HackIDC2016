'use strict';

angular.module('hackIdcApp')
  .service('sponsorsApiGetter', function () {
    return {
      getData : function(){
        var data = [
          {
            name:'Amadeus',
            logoSrc:'../../assets/prizes-grid-photos/hamburg.jpg',
            description:'Two Round-trip flight tickets to Hamburg, Germany',
            anchor:'Amadeus'
          },
          {
            name:'Backand',
            logoSrc:'../../assets/prizes-grid-photos/berlin.jpg',
            description:'Roundtrip flight tickets to Berlin, Germany',
            anchor:'Backand'
          },
          {
            name:'Flying Cargo',
            logoSrc:'../../assets/prizes-grid-photos/ipad.jpg',
            description:'iPad mini Wi-Fi Cellular',
            anchor:'FlyingCargo'
          },
          {
            name:'RapidAPI',
            logoSrc:'../../assets/icons/tbd.png',
            description:'To be announced',
            anchor:'RapidAPI'
          }
        ];
        return data;
      }
    };
  });
