var express=require('express');
var fs = require('fs');
var app=express();

//app.use('/',express.static('./public'))

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

  app.use('/', function(req, res, next) {
    let j = 'xhr' + req.path;
    if (fs.existsSync(j)) {
      res.set('Content-Type', 'application/json');
      res.send(fs.readFileSync(j));
    } else {
      next();
    }
  });
}
//监听端口
var server=app.listen(3000,function(){
  var port=server.address().port;
  console.log('http://localhost:%s',port);
})