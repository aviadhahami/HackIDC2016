'use strict';

angular.module('hackIdcApp')
  .service('sponsorsApiGetter', function () {
    return {
      getData : function(){
        var data = [
          {
            companyName:'Backand',
            prizePicSrc:'../../assets/prizes-grid-photos/berlin.jpg',
            companyLogoSrc:'../../assets/logos/backand-logo.png',
            apiLink:'http://www.backand.com',
            prizeTitle:'Roundtrip flight tickets to Berlin, Germany',
            info:'Backand challenge is simple! All you need to do is to use our service as the Backand for your project and you can enter the challenge!<br>The winner team will be the one who made the most use and complicated implementation of Backand. Bonus points will be given to each main feature Backand has to offer (use of real-time, actions, queries, hosting and much more)'
          },
          {
            companyName:'Flying Cargo',
            prizePicSrc:'../../assets/prizes-grid-photos/ipad.jpg',
            companyLogoSrc:'../../assets/logos/fc_logo.png',
            apiLink:'https://www.flying-cargo.com/he',
            prizeTitle:'iPad mini Wi-Fi Cellular',
            info:'Offers a variety of Logistic activities and acts not only as an Operator, but also as a lead player in the supply chain management arena.<br>We are here to offer start-up our advanced logistics services',
          },
          {
            companyName:'Amadeus',
            prizePicSrc:'../../assets/prizes-grid-photos/hamburg.jpg',
            companyLogoSrc:'../../assets/logos/amadeus_logo_transparent.png',
            prizeTitle:'Two Round-trip flight tickets to Hamburg, Germany',
            apiLink: 'https://sandbox.amadeus.com',
            info:'Win a pair of flight tickets to Europe!<br>The Amadeus Travel Innovation Sandbox currently includes APIs to help you build your travel related application or service proof-of-concept. <br>In order to increase your chances to win A pair of flight tickets to Europe you just need to use and work on Amadeus Sandbox.<br>The raffle (at the end of the 2016 Hackathon) will be held among all users of the Amadeus Sandbox.<br>Amadeus is a technology company dedicated to the global travel industry.<br>Use our Travel Innovation Sandbox and Make it happen!',
          },
          {
            companyName:'RapidAPI',
            prizePicSrc:'../../assets/icons/tbd.png',
            companyLogoSrc:'../../assets/logos/rapid-api-logo.png',
            apiLink:'',
            prizeTitle:'Rapid API\'s secret prize',
            info:'TBD'
          }
        ];
        return data;
      }
    };
  });
