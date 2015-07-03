// app.js
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

function sendkey(code, callback) {
 /*
 var exec = require('child_process').exec;
 exec("osascript -e 'tell application \"keynote\" to activate\'", function(err, stdout, stderr) {
 exec("osascript -e 'tell application \"system events\" to key code " + code + "'", function(err, stdout, stderr) {
 callback();
 });
 });
*/
  callback();
}

app.get('/right', function (req, res) {
  console.log("right");
  sendkey(124, function() {
    res.sendStatus(200);
  });
});

app.get('/left', function (req, res) {
  console.log("left");
  sendkey(123, function() {
    res.sendStatus(200);
  });
});

var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
