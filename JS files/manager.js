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

.when('/apmc', {

    templateUrl : 'apmc.html',
    
    controller : 'APMCController'
    
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

app.controller('APMCController', function($scope) {

    $scope.message = 'Hello from APMCController';
    $scope.refText = "APMCRef";
    $scope.apiKey = "579b464db66ec23bdd00000191e75c4a327d4077602b864dd5b10cdb";
    
    

    $scope.fetchRates = function(state, district, commodity){
            fetch(
                "https://api.data.gov.in/resource/9ef84268-d588-465a-a308-a864a43d0070?api-key="+this.apiKey+"&format=json&offset=0&limit=1&filters[state]="+state+"&filters[district]="+district+"&filters[commodity]="+commodity
            ).then((response)=>response.json())
            .then((data)=>this.displayRates(data));
        };

    $scope.displayRates = function(data){
            const{count} = data;
            if(count>=1){
                document.querySelector(".notFound").innerText="";
                const {state} = data.records[0];
                const {district} = data.records[0];
                const {market} = data.records[0];
                const {commodity} = data.records[0];
                const {min_price} = data.records[0];
                const {max_price} = data.records[0];
                const {modal_price} = data.records[0];
                document.querySelector(".state").innerText = "State: "+state;
                document.querySelector(".district").innerText = "District: "+district;
                document.querySelector(".market").innerText = "Market: "+market;
                document.querySelector(".commodity").innerText = "Commodity: "+commodity;
                document.querySelector(".min_price").innerHTML = "<b>Minimum Price</b> ₹"+min_price+"/Quintal";
                document.querySelector(".max_price").innerHTML = "<b>Maximum Price</b> ₹"+max_price+"/Quintal";
                document.querySelector(".modal_price").innerHTML = "<b>Modal Price</b> ₹"+modal_price+"/Quintal";
            }
            else{
                document.querySelector(".notFound").innerText="Records not found.\n There are multiple reasons for that: \n1) The commodity is not available in this location\n2) The records haven't been updated.\nTry again after some time.";
                document.querySelector(".state").innerText = "";
                document.querySelector(".district").innerText = "";
                document.querySelector(".market").innerText = "";
                document.querySelector(".commodity").innerText = "";
                document.querySelector(".min_price").innerText = "";
                document.querySelector(".max_price").innerText = "";
                document.querySelector(".modal_price").innerText = "";
            }
            
        };
    
    $scope.search = function(){
        stateElement = document.getElementById("stateList");
        var state = stateElement.options[stateElement.selectedIndex].text;
        console.log("hello "+state);
        districtElement = document.getElementById("districtList");
        var district = districtElement.options[districtElement.selectedIndex].text;
        console.log("hello "+district);
        commodityElement = document.getElementById("commodityList");
        var commodity = commodityElement.options[commodityElement.selectedIndex].text;
        console.log("hello "+commodity);
        this.fetchRates(state,district,commodity);
        
    };


});

app.controller('PolicyController', function($scope) {
    $scope.message = 'Hello from PolicyController';
    $scope.refText = "PolicyRef";
});


