
var App = angular.module('App', [
    'ngRoute'
]);

App.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
        when('/image/:imageName', {
            templateUrl: '/static/partials/image-view.html',
            controller: 'ImageViewController'
        }).
        otherwise({
            redirectTo: '/'
        });
    }]);

App.controller('IndexController', function($scope, $http) {
    $scope.URL_PREFIX = '/static/gallery/';

    $http.get('/thumbnails').then(function(response) {
        $scope.gallery = response.data;
    });
});


/*
angular.module('galleryApp', []).
    factory('DataSource', ['$http', function($http) {
        return {
            get: function(url, callback) {
                $http.get(url).
                success(function(data, status) {
                    callback(data);
                });
            }
        };
    }]);


var GalleryController = function($scope, DataSource) {
    DataSource.get('/something', function(data) {
        console.log("SOMETHING");
        $scope.gallery = data;
    });
}

*/

/*
var gallery = angular.module('gallery', ['ngRoute']);

gallery.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.when('/:galleryName', {
            templateUrl: 'partials/index.html',
            controller: 'GalleryController'
        });
    
    }]);


gallery.controller('GalleryController', function($scope, $http) {
    $http.get('/something').then(function(response) {
        $scope.gallery = response.data;
    });
});

*/

