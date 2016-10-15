var express = require('express');
var path = require('path');
var _ = require('lodash');
var bcrypt = require('bcryptjs');

var router = express.Router();
var app = express();

var models = require('../models')
var middleware = require('../middleware/middleware.js')();

router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/home', middleware.requireAuthentication, function (req, res){
      models.User.findOne({ where: {id: req.user.get('id')}}).then(function(currentUser){
        currentUser.getMissions().then(function(missions){
          var enteredMissions = [];
          missions.forEach(function(mission){
            enteredMissions.push(mission);
          })
        var data = {
          currentUser: currentUser,
          missions: enteredMissions
        }
        res.json(data);
      });
   });
});

router.post('/users/login', function (req, res) {
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

router.delete('/users/logout', middleware.requireAuthentication, function (req, res) {
  req.token.destroy().then(function () {
    res.status(204).send();
  }).catch(function () {
    res.status(500).send();
  });
});

router.post('/users/create', function(req,res){
    models.User.create({
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      username: req.body.username,
      password: req.body.password
    }).then(function(success) {
      res.json(success);
    }).catch(function(err){
      res.json(err);
    });
});

router.post('/mission/create', middleware.requireAuthentication, function(req, res){
  models.Mission.create({
    description: req.body.description,
    isCompleted: false,
    active: false
  }).then(function(mission){
    req.user.addMission(mission).then(function(success){
    res.json(mission);
  }).catch(function(err){
    res.json(err);
    })
  });
});

router.delete('/mission/delete/:id', middleware.requireAuthentication, function(req, res){
  models.User.findOne({where: {id: req.user.get('id')}}).then(function(){
    models.Mission.destroy({ where: { id: req.params.id }
    }).then(function(success){
      res.json(success);
    }).catch(function(err){
      throw err;
    })
  })
})

module.exports = router;
