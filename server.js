var express = require('express');
var app = express();

var bodyParser = require('body-parser');

var routes = require('./controllers/route-controllers.js')

var models = require('./models');
models.sequelize.sync();

app.use(express.static('public'));
app.use(express.static('src/assets'));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: true, 
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/', routes);

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});