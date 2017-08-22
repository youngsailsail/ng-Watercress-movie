var app=angular.module('app');
app.config(['$routeProvider',function ($routeProvider) {
    $routeProvider.when('/movie/:type',{
        templateUrl:'components/home2.html',
        controller:'homeController'
    }).when('/detail/:id',{
        templateUrl:'components/details.html',
        controller:'detailController'
    }).otherwise({
        redirectTo:'/movie/in_theaters'
    });
}]);
