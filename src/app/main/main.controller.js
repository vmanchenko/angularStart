(function() {
  'use strict';

  angular
    .module('angular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController($scope, $timeout, webDevTec, toastr, $http) {


    $scope.getfromGitHub = function(){
      $http.get('http://api.randomuser.me/?results=30').success(function(data, status, headers, config){
        $scope.facesFromGitHub = data.results;

        var newArrayFromGit = [],
          tempObj = {},
          tempUser;

        for(var  key in $scope.facesFromGitHub){
          tempUser = $scope.facesFromGitHub[key].user;

          tempObj = {
            email: tempUser.email,
            firstName: tempUser.name.first,
            lastName: tempUser.name.last,
            participation: "Yes",
            pic: tempUser.picture.large,
            gender: tempUser.gender
          };
          newArrayFromGit.push(tempObj);
        }


        localStorage.removeItem('partyUsers');
        localStorage.setItem('partyUsers', JSON.stringify(newArrayFromGit));
        activate();


      }).error(function(){
        $scope.facesFromGitHub = 'Sorry, github faces is not avialible';
      });


    };




    var vm = this,
        defaultArray = [
          {
            email: "melvin.fernandez53@example.com",
            firstName: "Melvin",
            lastName: "Fernandez",
            participation: "Yes"
          },
          {
            email: "michael.griffin53@example.com",
            firstName: "Michael",
            lastName: "Griffin",
            participation: "Yes"
          },
          {
            email: "sarah.ortiz30@example.com",
            firstName: "Sarah",
            lastName: "Ortiz",
            participation: "Maybe"
          },
          {
            email: "susan.nguyen83@example.com",
            firstName: "Susan",
            lastName: "Nguyen",
            participation: "Yes"
          },
          {
            email: "paula.boyd19@example.com",
            firstName: "Paula",
            lastName: "Boyd",
            participation: "Maybe"
          },
          {
            email: "elijah.mitchell68@example.com",
            firstName: "Elijah",
            lastName: "Mitchell",
            participation: "No"
          },
          {
            email: "brennan.kim85@example.com",
            firstName: "Brennan",
            lastName: "Kim",
            participation: "Maybe"
          },
          {
            email: "jared.willis11@example.com",
            firstName: "Jared ",
            lastName: "Willis",
            participation: "No"
          }
        ];



    vm.awesomeThings = [];
    vm.classAnimation = '';
    vm.creationDate = 1456109136191;
    vm.showToastr = showToastr;

    activate();


    $scope.clearLocalStorage = function (){
      localStorage.removeItem("partyUsers");
      activate();
    };

    $scope.addTestPersons = function (){
      localStorage.setItem('partyUsers', JSON.stringify(defaultArray));
      activate();
    };

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
