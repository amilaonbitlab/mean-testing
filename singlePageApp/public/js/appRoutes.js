// public/js/appRoutes.js
sampleApp.config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {

    $routeProvider

        // home page
        .when('/', {
            templateUrl: 'views/home.html',
            controller: 'homeController'
        })

        // test page that will use the testController
        .when('/test', {
            templateUrl: 'views/test.html',
            controller: 'testController'
        })
        .otherwise({ redirectTo: '/' });

    $locationProvider.html5Mode(true);

}]);