var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider) {

$routeProvider

.when('/', {

templateUrl : 'home.html',

controller : 'HomeController'

})

.when('/fertilizers', {

templateUrl : 'fertilizers.html',

controller : 'FertilizersController'

})

.when('/policy', {

templateUrl : 'policy.html',

controller : 'PolicyController'

})

.when('/aboutUs', {

    templateUrl : 'aboutUs.html',
    
    controller : 'AboutUsController'
    
})

.otherwise({redirectTo: '/'});

});

app.controller('HomeController', function($scope) {

$scope.message = 'Hello from HomeController';
$scope.refText = "HomeRef";
});

app.controller('FertilizersController', function($scope) {

$scope.message = 'Hello from BlogController';
$scope.refText = "BlogRef";
});

app.controller('PolicyController', function($scope) {

$scope.message = 'Hello from AboutController';
$scope.refText = "AboutRef";
});
