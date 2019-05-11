const http = require('http');
const fs = require('fs');
const exec = require('child_process').exec;
const path = require('path');
const funs = require("./funs.js");
const PORT = 8080;
const HOST = 'localhost';

var httpServer = http.createServer(function(req, res) {
  fs.readFile('./index.html', 'utf-8', function(error, content) {
    res.writeHead(200, {"Content-Type": "text/html"});
    res.end(content);
    });
});

var io = require('socket.io').listen(httpServer);

io.sockets.on('connection', function (socket) {
  
  socket.on('message', function (message) { 
    var tmpin = funs.tempr();
    var dirname = path.dirname(tmpin.name);
    fs.writeFile(tmpin.name, message.txt, function(err) {
      if (err) {  return console.log(err); }
    }); 
    var tmpout = funs.tempout();
    var code = funs.dockcode(dirname = dirname, version = message.ver, tmpin_name = tmpin.name, tmpout_name = tmpout.name);
    exec(code, function(error, stdout, stderr){
     socket.emit('res', fs.readFileSync(tmpout.name, 'utf8'));
    });
  });	
  
  socket.on('message2', function (message) { 
    var tmpin = funs.tempr();
    var dirname = path.dirname(tmpin.name);
    fs.writeFile(tmpin.name, message.txt, function(err) {
      if (err) {  return console.log(err); }
    }); 
    var tmpout1  = funs.tempout();
    var code = funs.dockcode(dirname = dirname, version = message.ver, tmpin_name = tmpin.name, tmpout_name = tmpout1.name);
    exec(code, function(error, stdout, stderr){
      socket.emit('res1', fs.readFileSync(tmpout1.name, 'utf8'));
    });
    var tmpout2  = funs.tempr();
    var code2 = funs.dockcode(dirname = dirname, version = message.ver2, tmpin_name = tmpin.name, tmpout_name = tmpout2.name);
    exec(code2, function(error, stdout, stderr){
      socket.emit('res2', fs.readFileSync(tmpout2.name, 'utf8'));
    });
  });	
});

httpServer.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);