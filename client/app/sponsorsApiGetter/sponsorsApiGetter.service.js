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
            dataObj:{
              info:'',
              specialOffer:'',
              apiLink:''
            }
          },
          {
            name:'Backand',
            logoSrc:'../../assets/prizes-grid-photos/backand.png',
            description:'',
            dataObj:{
              info:'',
              specialOffer:'',
              apiLink:''
            }
          },
          {
            name:'Flying Cargo',
            logoSrc:'../../assets/icons/tbd.png',
            description:'',
            dataObj:{
              info:'',
              specialOffer:'',
              apiLink:''
            }
          },
          {
            name:'RapidAPI',
            logoSrc:'../../assets/icons/tbd.png',
            description:'',
            dataObj:{
              info:'',
              specialOffer:'',
              apiLink:''
            }
          }
        ];
        return data;
      }
    };
  });
