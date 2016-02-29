(function() {
  'use strict';

  angular
    .module('angular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
        .state('home',{
            url: '/',
            templateUrl: 'app/main/main.html',
            controller: 'MainController',
            controllerAs: 'main'
        })
        .state('register',{
            url: '/register',
            templateUrl: 'app/register/register.html',
            controller: 'RegisterController',
            controllerAs: 'register'
        })
        .state('lesson_1',{
            url: '/lesson_1',
            templateUrl: 'app/firstLesson/homeTask_1.html',
            controller: 'Lesson_1Controller',
            controllerAs: 'lesson_1'
        });

    $urlRouterProvider.otherwise('/');
  }

})();
