(function() {
  'use strict';

  angular
    .module('angular')
    .controller('RegisterController', RegisterController);

  /** @ngInject */
  function RegisterController($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1456109136191;
    vm.showToastr = showToastr;

    activate();

      $scope.autoFill = function(){
          var defaultUser =  {
            firstName:'Vadim',
            lastName:'Manchenko',
            email:'vadikmanchenko@gmail.com',
            participation:'yes'
          };
          for (var key in defaultUser){
            $scope[key] = defaultUser[key];

          }

      };

      $scope.registerAction = function(){
          var oldRegistrations = JSON.parse(localStorage.getItem('partyUsers')) || [],
          newItem = {};

          newItem.email = $scope.email;
          newItem.firstName = $scope.firstName;
          newItem.lastName = $scope.lastName;

          console.log($scope.ava);

          if($scope.additionalPerson){
              newItem.additionalPersonName = $scope.additionalPersonName;
          }
          if($scope.participation){
              newItem.participation = $scope.participation;
          }else{
              newItem.participation = 'Воздержался от ответа'
          }


          oldRegistrations.push(newItem);

          localStorage.setItem('partyUsers', JSON.stringify(oldRegistrations));

          $scope.submitted = true;

          location.href = '/';

      };


      function activate() {
        document.querySelector('.navbar-nav li.active').classList.remove('active');
        document.querySelectorAll('.navbar-nav li')[1].classList.add('active');
    }

    function showToastr() {
      toastr.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>');
      vm.classAnimation = '';
    }

    function getWebDevTec() {
      vm.awesomeThings = webDevTec.getTec();

      angular.forEach(vm.awesomeThings, function(awesomeThing) {
        awesomeThing.rank = Math.random();
      });
    }
  }
})();
