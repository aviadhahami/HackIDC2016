'use strict';

angular.module('hackIdcApp')
  .service('sponsorsApiGetter', function () {
    return {
      getData : function(){
        var data = [
          {
            name:'Amadeus',
            logoSrc:'../../assets/icons/tbd.png',
            description:''
          },
          {
            name:'Backand',
            logoSrc:'../../assets/prizes-grid-photos/backand.png',
            description:''
          },
          {
            name:'Flying Cargo',
            logoSrc:'../../assets/prizes-grid-photos/flying-cargo.png',
            description:''
          },
          {
            name:'RapidAPI',
            logoSrc:'../../assets/icons/tbd.png',
            description:''
          }
        ];
        return data;
      }
    };
  });
