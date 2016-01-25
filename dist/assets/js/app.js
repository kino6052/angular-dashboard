var app = 'none';
'use strict';

//Dashboard
angular.module('Dash',['ui.router','door3.css']);
'use strict';

angular.module('Dash')
.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/");
  //
  // Now set up the states
  $stateProvider
    .state('index', {
      url: "",
      templateUrl: 'home/index.html'
    })
    .state('sms', {
      url: '/sms',
      templateUrl: 'sms/index.html'
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImhvbWUvdGVzdC5qcyIsImFwcC5qcyIsInJvdXRlcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQ0FBO0FBQ0E7QUFDQTtBQUNBO0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsidmFyIGFwcCA9ICdub25lJzsiLCIndXNlIHN0cmljdCc7XG5cbi8vRGFzaGJvYXJkXG5hbmd1bGFyLm1vZHVsZSgnRGFzaCcsWyd1aS5yb3V0ZXInLCdkb29yMy5jc3MnXSk7IiwiJ3VzZSBzdHJpY3QnO1xuXG5hbmd1bGFyLm1vZHVsZSgnRGFzaCcpXG4uY29uZmlnKGZ1bmN0aW9uKCRzdGF0ZVByb3ZpZGVyLCAkdXJsUm91dGVyUHJvdmlkZXIpIHtcbiAgLy9cbiAgLy8gRm9yIGFueSB1bm1hdGNoZWQgdXJsLCByZWRpcmVjdCB0byAvc3RhdGUxXG4gICR1cmxSb3V0ZXJQcm92aWRlci5vdGhlcndpc2UoXCIvXCIpO1xuICAvL1xuICAvLyBOb3cgc2V0IHVwIHRoZSBzdGF0ZXNcbiAgJHN0YXRlUHJvdmlkZXJcbiAgICAuc3RhdGUoJ2luZGV4Jywge1xuICAgICAgdXJsOiBcIlwiLFxuICAgICAgdGVtcGxhdGVVcmw6ICdob21lL2luZGV4Lmh0bWwnXG4gICAgfSlcbiAgICAuc3RhdGUoJ3NtcycsIHtcbiAgICAgIHVybDogJy9zbXMnLFxuICAgICAgdGVtcGxhdGVVcmw6ICdzbXMvaW5kZXguaHRtbCdcbiAgICB9KTtcbn0pOyJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
