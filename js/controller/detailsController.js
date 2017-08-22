var app=angular.module('app');
//详情控制器
app.controller('detailController',['$scope','$http','xmgHttp','baseUrl','$routeParams',function ($scope,$http,xmgHttp,baseUrl,$routeParams) {
    var formdata={
        apikey:'0b2bdeda43b5688921839c8ecb20399b'
    };
    var qus='';
    for (var key in formdata) {
        qus+=key+'='+formdata[key]+'&';
    }
    var url=baseUrl+'/movie/subject/'+$routeParams.id+'?'+qus;
    $scope.type=true;
    var fn=function (regs) {
        $scope.$apply(function () {
            $scope.regs2=regs;
            $scope.type=false;
        });

    };
    xmgHttp.xmghttp(url,fn);
}]);
