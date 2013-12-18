
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


App.controller('GalleryIndexController', function($scope, $http) {
    $scope.URL_PREFIX = '/images/';

    $http.get('images.json').then(function(response) {
        $scope.gallery = response.data;
    });
});

App.controller('ImageViewController', function($scope, $routeParams) {
    $scope.imageName = $routeParams.imageName;
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

