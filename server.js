var express = require('express');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var exphbs = require('express-handlebars');
var passport = require('passport');
var session = require('express-session');
// have to pass on a Store object on to the session
var SequelizeStore = require('connect-session-sequelize')(session.Store);
// using local strategy, and setting it up here to give options.
var mysql = require('mysql');
var LocalStrategy = require('passport-local').Strategy;
var _ = require('underscore');
var bcrypt = require('bcryptjs');
var userInfo;

// this is used to sync the data
var models = require('./models');
var db = models.sequelize;

db.sync();

var app = express();

app.use(express.static('public'));
app.use(express.static('src/assets'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.post('/mission/create', function(req, res){
  models.Mission.create({
    task: req.body.task,
    isCompleted: false
  }).then(function(success){
    res.json(success);
  }).catch(function(err){
    res.json(err);
  });
});

// app.get('/missions', function(req,res){
//   models.Mission.findAll({}).then(function(missions){
//     res.json(missions)
//   }).catch(function(err){
//     res.json(err);
//   });
// });

app.put('/api/task/:id', (req, res) => {
  mission.findOneAndUpdate({ _id: req.params.id }, {
    $set: { isCompleted: req.body.isCompleted }
  }).exec((err, foundtask) => {
    if (err) {
      res.json(err);
    } else {
      res.json(foundtask);
    }
  });
});

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});