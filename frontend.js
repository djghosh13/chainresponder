var http = require('http');
var express = require('express');
var fs = require('fs');

var app = express();
app.route('/').get(function(req, res) {
    
});

http.createServer(function (req, res) {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Hello World!');
}).listen(8080);

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    http.createServer(function(request, response) {  
        response.writeHeader(200, {"Content-Type": "text/html"});  
        response.write(html);
        response.end();  
    }).listen(8000);
});
