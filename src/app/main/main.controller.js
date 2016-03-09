(function() {
  'use strict';

  angular
    .module('angular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1456109136191;
    vm.showToastr = showToastr;

    activate();


    $scope.clearLocalStorage = function (){
      localStorage.removeItem("partyUsers");
      activate();
    }


    function activate() {

     document.querySelector('.navbar-nav li.active').classList.remove('active');
     document.querySelectorAll('.navbar-nav li')[0].classList.add('active');

      $scope.someText = "text one time";
      $scope.someHtml = "<div class='redColored'>Some div</div>";

      $scope.array = JSON.parse(localStorage.getItem('partyUsers')) || [];

      getWebDevTec();
      $timeout(function() {
        vm.classAnimation = 'rubberBand';
      }, 4000);
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
