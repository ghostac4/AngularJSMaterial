var app = angular.module('myApp',['ui.router','ngMaterial','ngAnimate']);

app.config(function($stateProvider,$urlRouterProvider,$mdThemingProvider){

$urlRouterProvider.otherwise('home');

$mdThemingProvider.theme('default')
    .primaryPalette('purple',{
      'default': '400' // use shade 200 for default, and keep all other shades the same
    })
    .accentPalette('orange',{
      'default': '500' // use shade 200 for default, and keep all other shades the same
    });

$stateProvider
   .state('home',{
     url : '/home',
     templateUrl : 'templates/registrationForm.html',
     controller : 'registrationCtrl'
   });
});
