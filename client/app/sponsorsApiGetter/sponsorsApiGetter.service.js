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
            name:'Amadeus',
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
