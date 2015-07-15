// app.js
var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var Slack = require('node-slack');
var port = process.env.PORT || 3000;
var hook_url = process.env.HOOK_URL || "";
var slack = (hook_url != "" ? new Slack(hook_url) : null);

function sendkey(code, callback) {
 /*
 var exec = require('child_process').exec;
 exec("osascript -e 'tell application \"keynote\" to activate\'", function(err, stdout, stderr) {
 exec("osascript -e 'tell application \"system events\" to key code " + code + "'", function(err, stdout, stderr) {
 callback();
 });
 });
*/
  if (slack != null) {
    slack.send({
      text: 'Code received: ' + code
    });
  }
  callback();
}

app.use("/web",express.static('public'));

app.get('/', function (req, res) {
  res.redirect("/web/index.htm");
});
/*
*/

app.get('/web', function (req, res) {
  res.redirect("/web/index.htm");
});

app.get('/right', function (req, res) {
  console.log("right");
  sendkey('right', function() {
    io.emit('chat message', 'right');
    res.sendStatus(200);
  });
});

app.get('/left', function (req, res) {
  console.log("left");
  sendkey('left', function() {
    io.emit('chat message', 'left');
    res.sendStatus(200);
  });
});

io.on('connection', function(socket){
  console.log('a user connected');
  socket.on('disconnect', function(){
    console.log('user disconnected');
  });
  socket.on('chat message', function(msg){
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(port, function(){
  console.log('listening on *:' + port);
});
/*
var server = app.listen(port, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
*/
