angular.module('calorific', ['ionic','calorific.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

  .state('app', {
    url: "/app",
    abstract: true,
    templateUrl: "templates/menu.html",
    controller: 'AppCtrl'
  })

  .state('app.dishes', {
    url: "/dishes/:dishesId",
    views: {
      'menuContent': {
        templateUrl: "templates/dishes.html",
        controller: 'DishesCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/app/dishes/1');
});
