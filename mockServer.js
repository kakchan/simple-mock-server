var express = require('express');
var app = express();

var setupServer = function() {
  var server = require('http').createServer(app);
  require('./express')(app);
  require('./routes')(app);
  return server;
};

var startServer = function(server) {
  var port = 8099;
  var host = 'localhost';
  server.listen(port, host, function() {
    console.log('Web server listening on %d', port);
  });
};

startServer(setupServer());