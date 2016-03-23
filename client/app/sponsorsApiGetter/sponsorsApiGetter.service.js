'use strict';

angular.module('hackIdcApp')
  .service('sponsorsApiGetter', function () {
    return {
      getData : function(){
        var data = [
          {
            name:'Amadeus',
            logoSrc:'../../assets/icons/tbd.png',
            description:'',
            anchor:'Amadeus'
          },
          {
            name:'Backand',
            logoSrc:'../../assets/prizes-grid-photos/backand.png',
            description:'',
            anchor:'Backand'
          },
          {
            name:'Flying Cargo',
            logoSrc:'../../assets/prizes-grid-photos/flying-cargo.png',
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
