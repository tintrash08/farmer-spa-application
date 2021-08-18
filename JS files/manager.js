hell="hello";
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

.when('/weather', {

    templateUrl : 'weather.html',
    
    controller : 'WeatherController'
    
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

app.controller('WeatherController', function($scope) {

    $scope.message = 'Hello from WeatherController';
    $scope.refText = "WeatherRef";
    $scope.apiKey = "e69b45352a586cc170005d07d91c008d",
        
    $scope.fetchWeather = function(city){
            fetch(
                "https://api.openweathermap.org/data/2.5/weather?q="+city+"&units=metric&appid="+this.apiKey
            ).then((response)=>response.json())
            .then((data)=>this.displayWeather(data));
        };
    
    $scope.displayWeather = function(data){
            const {name} = data;
            const {icon, description} = data.weather[0];
            const {temp, humidity} = data.main;
            const {speed} = data.wind;
            document.querySelector(".city").innerText = "Weather in "+name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/"+icon+".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp+"°C";
            document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind Speed: " + speed + "km/h";
        };
    
    $scope.search = function(){
        this.fetchWeather(document.getElementById("search-bar").value);
    };
});

app.controller('PolicyController', function($scope) {
    $scope.message = 'Hello from PolicyController';
    $scope.refText = "PolicyRef";
});


