var app=angular.module('app');
app.value('baseUrl','https://api.douban.com/v2');
//自定义服务
app.service('xmgHttp',['$window',function ($window) {
    this.xmghttp=function (url,fn) {
        var fnName='callBack'+Math.random().toString().slice(2);
        $window[fnName]=function (regs) {
            if(fn){
                fn(regs)
            }
            document.body.removeChild(newScript);
        };
        var newScript=document.createElement('script');
        document.body.appendChild(newScript);
        newScript.src=url+'callback'+'='+fnName;
        // console.log(newScript.src);
    }
}])

