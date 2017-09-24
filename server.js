var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var serveStatic = require('serve-static');
app = express();
app.use(bodyParser());
app.use(serveStatic(__dirname));
var port = process.env.PORT || 5000;
require('./server/routes')(app);
app.listen(port);
console.log('server started '+ port);