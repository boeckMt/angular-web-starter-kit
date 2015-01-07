(function() {
  'use strict';

  angular.module('tenSecDraw')
    .controller('MainCtrl', function($scope) {

      $scope.menuOpen = false;
      $scope.main = 'hello';

      $scope.closeMenu = function() {
        $scope.menuOpen = false;
      };

      $scope.toggleMenu = function() {
        if ($scope.menuOpen) {
          $scope.menuOpen = false;
        } else {
          $scope.menuOpen = true;
        }
      };

      $scope.setMain = function(main) {
        $scope.main = main;

        console.log($scope.main);
        $scope.closeMenu();
      };
    });
})();
