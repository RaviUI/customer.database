'use strict';

/**
 * @ngdoc overview
 * @name pssApp
 * @description
 * # pssApp
 *
 * Main module of the application.
 */
angular
  .module('SampleApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider,$httpProvider) {
    $routeProvider	 
	  .when('/', {
      templateUrl: 'views/home.html',
      controller: 'homeCtrl'
    }).when('/profile/:id', {
      templateUrl: 'views/profile.html',
      controller: 'profileCtrl'
    }).when('/profile', {
      templateUrl: 'views/profile.html',
      controller: 'profileCtrl'
    });
    $httpProvider.defaults.useXDomain = true;
    delete $httpProvider.defaults.headers.common['X-Requested-With'];
  });
  