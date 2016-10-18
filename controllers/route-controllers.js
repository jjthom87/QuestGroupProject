// DEPENDENCIES
var express = require('express');
var path = require('path');
var _ = require('lodash');

var router = express.Router();

var models = require('../models');
var modelController = require('./model-controllers.js');

var middleware = require('../middleware/middleware.js')();

// ROUTES

// Setting root ('/') path to index.html
router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
})

// Setting homepage to authenticated users only
router.get('/home', middleware.requireAuthentication, function(req, res){
    modelController.userHome(req.user.id, function(data){
        res.json(data)
    });
});

// Setting mission homepage to authenticated users only
router.get('/missionhome', middleware.requireAuthentication, function(req,res){
    modelController.missionMain(req.user.id, function(data){
      res.json(data)
    })
});

// Sign-in: Setting user login route
router.post('/users/login', function (req, res) {
  var body = _.pick(req.body, 'username', 'password');
  var userInfo;

// Generates JSON Web Token once user is signed-in
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

// Sign-out: Deletes user's JSON Web Token once logged out
router.delete('/users/logout', middleware.requireAuthentication, function (req, res) {
  req.token.destroy().then(function () {
    res.status(204).send();
  }).catch(function () {
    res.status(500).send();
  });
});

// Registration: Creates a new user record in the database based on the 'user' model
router.post('/users/create', function(req,res){
    modelController.userCreate(
      req.body.name, 
      req.body.username, 
      req.body.password, 
    function(success){
      res.json(success);
    });
});

router.post('/mission/create', middleware.requireAuthentication, function(req, res){
    modelController.missionCreate(
      req.body.title,
      req.body.description,
      req.user, 
    function(success){
      res.json(success);
    });
});

router.post('/task/create/', middleware.requireAuthentication, function(req, res){
    models.User.findOne({where: {id: req.user.id}}).then(function(user){
        models.Mission.findOne({ where: {title: req.body.dropdownItem }}).then(function(mission){
          models.Task.create({
            task: req.body.task,
            missionName: req.body.dropdownItem,
            isCompleted: false,
            active: false,
            UserId: req.user.id,
            MissionId: mission.id
          }).then(function(task){
          mission.addTask(task).then(function(success){
           res.json(task); 
        }).catch(function(err){
          throw err;
          });
        });
      });
    });
});

router.put('/task/toggle/:id', middleware.requireAuthentication, function(req, res){
  modelController.taskToggle(
    req.params.id,
    function(success){
      res.json(success)
    });
});

router.post('/quest/create', middleware.requireAuthentication, function(req, res){
    modelController.questCreate(
      req.body.title,
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
