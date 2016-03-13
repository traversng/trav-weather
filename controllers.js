// Controllers
weatherApp.controller('mainController', ['$scope', '$location', 'zipcodeService', 'weatherService', function ($scope, $location, zipcodeService, weatherService) {
    $scope.zipcode = zipcodeService.zipcode;
    console.log('$scope.zipcode: ', $scope.zipcode);
    $scope.$watch('zipcode', function () {
        zipcodeService.zipcode = $scope.zipcode;
    });
    $scope.submit = function() {
        $location.path('/forecast');
    }
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'zipcodeService', 'weatherService', function ($scope, $routeParams, zipcodeService, weatherService) {
    $scope.zipcode = zipcodeService.zipcode;

    $scope.days = $routeParams.days || 1;

    $scope.weatherResult = weatherService.GetWeather($scope.zipcode, $scope.days);

    $scope.convertToFahrenheit = function(degK) {
        return Math.round((1.8 * (degK - 273)) + 32);
    };
    $scope.convertToDate = function(weirdDate) {
        return new Date(weirdDate * 1000);
    }
}]);