(function() {
  'use strict';

  angular
    .module('tenSecDraw', [
      'ngRoute'
    ])
    .config(function($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl',
          reloadOnSearch: false //um search in URL zu aendern ohne reload
        })
        .otherwise({
          redirectTo: '/'
        });
    });
})();
