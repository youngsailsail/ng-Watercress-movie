;(function (angular) {
    var app=angular.module('app',['ngRoute']);
 //自定义指令
    app.directive('att',['$location',function ($location) {
      return{
          restrict:'EA',
          link:function ($scope,e,attr) {
            var aa=e.find('a').attr('href').slice(2);
             $scope.location=$location;
             $scope.$watch('location.url()',function (n,o) {
                 if(n==aa){
               e.parent().children().removeClass('curr');
               e.addClass('curr');

                 }
            });



          }
      }
    }])
})(angular);