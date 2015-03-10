var express = require('express');
var app = express();
var fs = require('fs');

app.set('port', (process.env.PORT || 5000));

app.get('/', function(request, response) {
  response.send('Hello World!');
});

app.post('/' function (request, response) {
	fs.writeFile("publicAssets/someImage.png", request, response.send('file saved'));
});

app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'));
});

