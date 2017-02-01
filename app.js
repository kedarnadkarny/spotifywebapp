var express  = require('express');
var app      = express();
var port  	 = 3000;

app.use(express.static(__dirname + '/client'));
require('./server/routes.js')(app);

app.listen(port);
console.log("Server running on port " + port);
