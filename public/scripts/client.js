var myApp = angular.module('myApp', ['ngRoute']);

/// Routes ///
myApp.config(function($routeProvider, $locationProvider) {
  $locationProvider.hashPrefix('');
  console.log('myApp -- config');
  $routeProvider
    .when('/', {
      templateUrl: '/views/templates/home.html',
      //controller: 'LoginController as lc',
    })
    .when('/about', {
      templateUrl: '/views/templates/about.html',
      //controller: 'LoginController as lc',
    })
    .when('/home', {
      templateUrl: '/views/templates/home.html',
      //controller: 'LoginController as lc',
    })
    .when('/works', {
      templateUrl: '/views/templates/works.html',
      //controller: 'LoginController as lc',
    })
    .otherwise({
      redirectTo: 'home'
    });
});
