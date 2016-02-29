(function() {
  'use strict';

  angular
    .module('angular')
    .controller('Lesson_1Controller', Lesson_1Controller);

  /** @ngInject */
  function Lesson_1Controller($scope, $timeout, webDevTec, toastr) {
    var vm = this;

    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1456109136191;
    vm.showToastr = showToastr;

    activate();

    function activate() {

    document.querySelector('.navbar-nav li.active').classList.remove('active');
    document.querySelectorAll('.navbar-nav li')[2].classList.add('active');

      $scope.someText = "text one time";
      $scope.someHtml = "<div class='redColored'>Some div</div>";
        $scope.array = [
            {
                src: 'https://lh3.googleusercontent.com/-acrgtkcGo0Y/AAAAAAAAAAI/AAAAAAAAAAA/AMW9IgcPa2SKzC-h26fgbHwlJlJZIT2Afg/s32-c-mo/photo.jpg',
                name: "first",
                nim: 1
            },
            {
                name: "second",
                num: 2
            },
            {
                name:"third",
                num: 3
            }
        ];

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
