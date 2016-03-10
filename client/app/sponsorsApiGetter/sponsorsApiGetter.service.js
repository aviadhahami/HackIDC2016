'use strict';

angular.module('hackIdcApp')
  .service('sponsorsApiGetter', function () {
    return {
      getData : function(){
        var data = [
          {
            name:'Amadeus',
            logoSrc:'../../assets/logos/amadeus_logo_transparent.png',
            description:'',
            dataObj:{
              info:'',
              specialOffer:'',
              apiLink:''
            }
          },
          {
            name:'Amadeus',
            logoSrc:'../../assets/logos/amadeus_logo_transparent.png',
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
