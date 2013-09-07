var express = require('express'),
	app = express();

app.get('/hello', function(req, res){
  res.end("Hello, world!");
});

app.listen(3000);
console.log('Listening on port 3000');