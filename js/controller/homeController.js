var app=angular.module('app');
// 主页控制器
app.controller('homeController',['$scope','$http','xmgHttp','baseUrl','$routeParams','$location',function ($scope,$http,xmgHttp,baseUrl,$routeParams) {
    $scope.currPage=1;
    $scope.count=5;
    $scope.type2=false;
    $scope.type3=true;
    function change(start1) {
        $scope.type=true;
        var formdata={
            apikey:'0b2bdeda43b5688921839c8ecb20399b',
            start:start1,
            count:$scope.count
        };
        var qus='';
        for (var key in formdata) {
            qus+=key+'='+formdata[key]+'&';
        }
        var url=baseUrl+/movie/+$routeParams.type+'?'+qus;
        var fn=function (regs) {
            $scope.$apply(function () {
                $scope.regs=regs;
                $scope.allPage=Math.ceil(regs.total/$scope.count);
                $scope.type=false;
            });

        };
        xmgHttp.xmghttp(url,fn);
    }
    change(0);
    $scope.move=function (type) {
        if(type==true){
            //上一页
            $scope.currPage--;
        }else{
            //下一页
            $scope.currPage++;
        }
        startCou=($scope.currPage-1)*$scope.count;
        change(startCou);
        $scope.type2=$scope.currPage==1?false :true;
        $scope.type3=$scope.currPage==$scope.allPage?false :true;
    };


}]);