var express = require('express');
var bodyParser = require('body-parser');
var mysql = require('mysql');
var _ = require('underscore');
var bcrypt = require('bcryptjs');
var middleware = require('./middleware.js')(db);

// this is used to sync the data
var models = require('./models');
var db = models.sequelize;

db.sync();

var app = express();
app.use(express.static('public'));
app.use(express.static('src/assets'));

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

app.get('/home', middleware.requireAuthentication, function (req, res){
      models.User.findOne({ where: {id: req.user.get('id')}}).then(function(currentUser){
        currentUser.getDreams().then(function(dreams){
          var enteredDreams = [];

          dreams.forEach(function(dream){
            enteredDreams.push(dream);
          })
        var data = {
          currentUser: currentUser,
          dreams: enteredDreams
        }
        res.json(data);
      });
   });
});

app.post('/users/login', function (req, res) {
  var body = _.pick(req.body, 'username', 'password');
  var userInfo;

  models.User.authenticate(body).then(function (user) {
    var token = user.generateToken('authentication');
    userInfo = user;

    return models.Token.create({
      token: token
    });
  }).then(function (tokenInstance) {
    res.header('Auth', tokenInstance.get('token')).json(userInfo.toPublicJSON());
  }).catch(function () {
    res.status(401).send();
  });
});

// app.delete('/users/login', middleware.requireAuthentication, function (req, res) {
//   req.token.destroy().then(function () {
//     res.status(204).send();
//   }).catch(function () {
//     res.status(500).send();
//   });
// });

app.post('/users/create', function(req,res){
    models.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      email: req.body.email,
      password: req.body.password
    }).then(function(success) {
      res.json(success);
    }).catch(function(err){
      res.json(err);
    });
});

// app.post('/dream/create', middleware.requireAuthentication, function(req, res){
//         models.Dream.create({
//             title: req.body.title,
//             description: req.body.description,
//             nightmare: req.body.nightmare
//         }).then(function(dream){
//         req.user.addDream(dream).then(function(success){
//         res.json(dream);
//       }).catch(function(err){
//         throw err;
//       });
//     })
// });

// app.delete('/dream/delete/:id', middleware.requireAuthentication, function(req, res){
//   models.User.findOne({where: {id: req.user.get('id')}}).then(function(){
//     models.Dream.destroy({ where: { id: req.params.id }
//     }).then(function(success){
//       res.json(success);
//     }).catch(function(err){
//       throw err;
//     })
//   })
// })

// app.post('/mission/create', function(req, res){
//   models.Mission.create({
//     task: req.body.task,
//     isCompleted: false
//   }).then(function(success){
//     res.json(success);
//   }).catch(function(err){
//     res.json(err);
//   });
// });

// app.get('/missions', function(req,res){
//   models.Mission.findAll({}).then(function(missions){
//     res.json(missions)
//   }).catch(function(err){
//     res.json(err);
//   });
// });

// app.put('/api/task/:id', (req, res) => {
//   mission.findOneAndUpdate({ _id: req.params.id }, {
//     $set: { isCompleted: req.body.isCompleted }
//   }).exec((err, foundtask) => {
//     if (err) {
//       res.json(err);
//     } else {
//       res.json(foundtask);
//     }
//   });
// });

var PORT = process.env.PORT || 8000;

app.listen(PORT, function () {
  console.log('database operation on port: ' + PORT);
});