// Services
weatherApp.service('zipcodeService', function () {
    this.zipcode = 92596;
    this.country = 'US';
});

weatherApp.service('weatherService', ['$resource', function($resource) {
    this.GetWeather = function(city, days) {
        var weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily?APPID=' + OWMAPI,
            {
                callback: "JSON_CALLBACK"
            },
            {
                get: {method: "JSONP"}
            });
        return weatherAPI.get({ zip: city, cnt: days });
    }

}]);