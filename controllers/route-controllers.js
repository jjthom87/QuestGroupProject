var express = require('express');
var path = require('path');
var _ = require('lodash');

var modelController = require('./model-controllers.js');

var router = express.Router();
var app = express();

var models = require('../models')
var middleware = require('../middleware/middleware.js')();

var currentMission;

router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
})

router.get('/home', middleware.requireAuthentication, function(req, res){
    modelController.userHome(req.user.id, function(data){
        res.json(data)
    });
});

router.get('/missionhome', middleware.requireAuthentication, function(req,res){
  models.Mission.findOne({ where: {id: currentMission[0]}})
    .then(function(success){
      res.json(success)
    }).catch(function(err){
      throw err;
    });
})

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
    modelController.userCreate(
      req.body.firstname, 
      req.body.lastname, 
      req.body.username, 
      req.body.password, 
    function(success){
      res.json(success);
    });
});

router.post('/mission/create', middleware.requireAuthentication, function(req, res){
    currentMission = [];
    modelController.missionCreate(
      req.body.title,
      req.body.task1,
      req.body.task2, 
      req.body.task3, 
      req.body.task4, 
      req.body.task5, 
      req.body.task6, 
      req.body.task7, 
      req.body.task8,  
      req.body.task9, 
      req.body.task10, 
      req.user, 
    function(success){
      currentMission.push(success.id)
      res.json(success);
    });
});

router.post('/task/create/', middleware.requireAuthentication, function(req, res){
      models.Mission.findOne({ where: {id: currentMission[0] }}).then(function(mission){
        models.Task.create({
          task: req.body.task,
          isCompleted: false,
          active: false
        }).then(function(task){
        mission.addTask(task).then(function(success){
        res.json(task);
      }).catch(function(err){
        throw err;
        });
      });
    })
});

router.post('/quest/create', middleware.requireAuthentication, function(req, res){
    modelController.questCreate(
      req.body.description, 
      req.user, 
    function(success){
      res.json(success);
    });
});

router.delete('/mission/delete/:id', middleware.requireAuthentication, function(req, res){
    modelController.missionDelete(
        req.user.id,
        req.params.id,
    function(success){
      res.json(success);
    })
})

router.delete('/quest/delete/:id', middleware.requireAuthentication, function(req, res){
    modelController.questDelete(
        req.user.id,
        req.params.id,
    function(success){
      res.json(success);
    })
})

module.exports = router;
