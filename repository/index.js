
var express = require('express')
var fs = require('fs')
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/kubernetes'))

app.get('/', function(request, response) {

  files = fs.readdirSync('kubernetes');
  var data = '';
  files.forEach(function(item) {
    data = data + '<p><a href="/'+item+'">'+item+'</a></p>';
  });

  var body = [
        '<head><title>Node app by tenxcloud</title></head>',
        '<div style="14px Lucida Grande, Helvetica, Arial, sans-serif">',
            '<span style="display: inline-block;width: 170px;height: 40px;background: url(https://www.tenxcloud.com/images/index/logo.png) 0 0/95% no-repeat;position: relative;top: 13px;">',
            '</span>',
            '<div style="width:100%;pading:50px 100px;text-align:center;">',
                '<h1>Kubernetes官方源代码包（点击下载）</h1>',
                data,
            '</div>',
        '</div>'
     ].join('');

  response.send(body)
})

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
})


/**
var http = require('http');
var body = [
      '<head><title>Node app by tenxcloud</title></head>',
      '<div style="14px Lucida Grande, Helvetica, Arial, sans-serif">',
          '<span style="display: inline-block;width: 170px;height: 40px;background: url(https://www.tenxcloud.com/images/index/logo.png) 0 0/95% no-repeat;position: relative;top: 13px;">',
          '</span>',
          '<div style="width:100%;pading:50px 100px;text-align:center;">',
              '<h1>Hello World</h1>',
              '<p>Welcome to Node app.</span></p>',
          '</div>',
      '</div>'
   ].join('');

http.createServer(function (request, response) {
    response.writeHead(200, { 'Content-Length': body.length,'Content-Type': 'text/html' });
    response.end(body);
}).listen(5000)

console.log('Node app is running at localhost:' + 5000 + '/');
**/