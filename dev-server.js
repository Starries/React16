var express=require('express');
var app=express();

app.use('/',express.static('public'))

if(process.env.NODE_ENV!=='production'){

    var webpack=require('webpack');
    var webpackConfig=require('./webpack.config.js');
    var webpackCompiled=webpack(webpackConfig);

    var webpackDevMiddleware=require('webpack-dev-middleware');
    app.use(webpackDevMiddleware(webpackCompiled,{
        publicPath:'/',
        stats:{color:true},
        lazy:false,
        watchOptions:{
            aggregateTimeout:300,
            poll:true
        },
    }));
}
//监听端口
var server=app.listen(2300,function(){
    var port=server.address().port;
    console.log('http://localhost:%s',port);
})