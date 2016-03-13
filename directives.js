// Directives
weatherApp.directive('weatherResults', function() {
    return {
        restrict: 'E',
        templateUrl: 'directives/weatherResults.html',
        replace: true,
        scope: {
            weatherDay: '=',
            zipcode: '@',
            convertToStandard: '&',
            convertToDate: '&',
            dateFormat: '@'
        },
        compile: function(elem, attrs) {
            return {
                post: function(scope, elements, attr) {
                    console.log('scope: ', scope);
                }
            }
        }
    }
});
