angular.module('appRoutes', [])

.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      .when('/register', {
        templateUrl: 'views/busRegistration.html',
        controller: 'RegController'
      })
      .when('/profile', {
        templateUrl: 'views/'
      });
  }
]);
