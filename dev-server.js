var express=require('express');
var fs = require('fs');
var app= express();
const path = require('path');

if(process.env.NODE_ENV!=='production'){

  var webpack=require('webpack');
  var webpackConfig=require('./webpack.config.js');
  var webpackCompiled=webpack(webpackConfig);

  var webpackDevMiddleware=require('webpack-dev-middleware');
  app.use(webpackDevMiddleware(webpackCompiled,{
    publicPath:'/',
    stats:{color:true},
  }));

  //var webpackHotMiddleware=require('webpack-hot-middleware');
  //app.use(webpackHotMiddleware(webpackCompiled));

  app.use('/xhr', function(req, res, next) {
    let j = 'xhr' + req.path;
    if (fs.existsSync(j)) {
      res.set('Content-Type', 'application/json');
      res.send(fs.readFileSync(j));
    } else {
      next();
    }
  });

  //app.use('/public',express.static(path.join(__dirname, 'public')));

  app.set('view engine', 'ejs');
  app.set('views', path.join(__dirname, './public/views'));
  app.get('/',function (req, res) {
    res.render('index',data)
  });
  
}

const data = {
  title: 'aaa',
  appString: 'bbbsssss'
};

//监听端口
var server=app.listen(3000,function(){
  var port=server.address().port;
  console.log('http://localhost:%s',port);
})