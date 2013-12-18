
var App = angular.module('App', ['ngRoute']);

App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/', {
            templateUrl: 'partials/gallery-index.html',
            controller:  'GalleryIndexController'
        }).
        when('/image/:imageName', {
            templateUrl: 'partials/image-view.html',
            controller:  'ImageViewController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);


App.controller('GalleryIndexController', function($location, $scope, $http) {
    $scope.URL_PREFIX = '/images/';

    $http.get('images.json').then(function(response) {
        $scope.gallery = response.data;
    });

    $scope.viewImage = function(imageName) {
        $location.path('/image/' + imageName);
    }
});

App.controller('ImageViewController', function($location, $scope, $routeParams) {
    $scope.imageName = $routeParams.imageName;

    $scope.back = function() {
        $location.path('/');
    }
});