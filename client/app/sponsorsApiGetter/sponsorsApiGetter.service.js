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
            info:'Backand challenge is simple! All you need to do is to use our service as the Backand for your project and you can enter the challenge!<br><br>The winner team will be the one who made the most use and complicated implementation of Backand. Bonus points will be given to each main feature Backand has to offer (use of real-time, actions, queries, hosting and much more)'
          },
          {
            companyName:'Amadeus',
            prizePicSrc:'../../assets/prizes-grid-photos/hamburg.jpg',
            companyLogoSrc:'../../assets/logos/amadeus_logo_transparent.png',
            prizeTitle:'Two Round-trip flight tickets to Hamburg, Germany',
            apiLink: 'https://sandbox.amadeus.com',
            info:'Win a pair of flight tickets to Europe!<br><br>The Amadeus Travel Innovation Sandbox currently includes APIs to help you build your travel related application or service proof-of-concept. <br><br>In order to increase your chances to win A pair of flight tickets to Europe you just need to use and work on Amadeus Sandbox.<br><br>The raffle (at the end of the 2016 Hackathon) will be held among all users of the Amadeus Sandbox.<br><br>Amadeus is a technology company dedicated to the global travel industry.<br><br>Use our Travel Innovation Sandbox and Make it happen!',
          },
          {
            companyName:'Orcam',
            prizePicSrc:'../../assets/prizes-grid-photos/zurich.png',
            companyLogoSrc:'../../assets/logos/orcam.png',
            apiLink:'https://goo.gl/pjSlpc',
            prizeTitle:'Zurich Hackathon and Vacation',
            info:'Participants will have a chance to create innovative applications for MyMe.<br> The winning team with the most innovative app will be flown to Zurich to attend the largest hackathon in Europe, and a vacation.'
          },
          {
            companyName:'Produvia',
            prizePicSrc:'../../assets/prizes-grid-photos/pi.png',
            companyLogoSrc:'../../assets/logos/produvia.png',
            apiLink:'http://weavingthings.com',
            prizeTitle:'Win a Raspberry Pi  3 plus a colored Smart-Light bulb',
            info:'Integrating smart devices into apps and services is now easier than ever.<br>All you need to do is use our service and get direct access over mobile or Raspberry Pi to control different kinds of smart IOT devices.<br>The winning team will be the one who will build the most innovative and awesome use-case (application or web service) by using our WeavingThings lighting service that lets you control different kinds of smart light-bulbs with a single API along with an additional public API such as weather, date and time, etc.'
          },
          {
            companyName:'Flying Cargo',
            prizePicSrc:'../../assets/prizes-grid-photos/ipad.jpg',
            companyLogoSrc:'../../assets/logos/fc_logo.png',
            apiLink:'',
            prizeTitle:'iPad mini 4',
            // info:'Offers a variety of Logistic activities and acts not only as an Operator, but also as a lead player in the supply chain management arena.<br>We are here to offer start-up our advanced logistics services',
            info:''
          },
          {
            companyName:'RapidAPI & eBay',
            prizePicSrc:'../../assets/prizes-grid-photos/iphone.png',
            companyLogoSrc:'../../assets/logos/rapid-api-logo.png',
            apiLink:'http://goo.gl/n3abYC',
            prizeTitle:'Secret Prize',
            info:'Want to pitch your Idea to <b>Ebay leaders</b> and to get new iPhones for you and for your team? RapidAPI and Ebay happy to present their challenge'
          }
        ];
        return data;
      }
    };
  });
