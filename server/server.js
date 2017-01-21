var express = require('express');
var app = express();
var fs = require('fs');

var bodyParser = require('body-parser');

var routes = require('./controllers/route-controllers.js');

var session = require('express-session');

var models = require('./models');
models.sequelize.sync();

app.use(express.static('./client/public'));
app.use(express.static('./client/src/assets'));

app.use(session({
    secret: 'allthesmallthings',
    saveUninitialized: false,
    resave: false
}));

app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({ 
	limit: '50mb',
	extended: true, 
	parameterLimit:50000}));
app.use(bodyParser.text());
app.use(bodyParser.json());

app.use('/', routes);

fs.readdirSync('./server/controllers/route-controllers').forEach(function(file) {
    if (file.substr(-3) == '.js') {
        route = require('./controllers/route-controllers/' + file);
        route.controller(app, session);
    }
});

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});