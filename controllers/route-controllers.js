// DEPENDENCIES
var express = require('express');
var path = require('path');
var _ = require('lodash');

var router = express.Router();

var models = require('../models');
var modelController = require('./model-controllers.js');

var middleware = require('../middleware/middleware.js')();

// ROUTES
// NON-authenticated Users=================================================
// Setting root ('/') path to index.html
router.get('/', (req,res) => {
	res.sendFile(path.join(__dirname, '../public/index.html'));
})

// Registration: Allows users to create new user based on model input
router.post('/api/users/create', function(req,res){
    modelController.userCreate(
      req.body.name, 
      req.body.username, 
      req.body.password, 
      req.body.createdOn,
      req.body.profileImage,
    function(success){
      res.json(success);
    });
});

// Sign-in: Setting user login route
router.post('/api/users/login', function (req, res) {
  var body = _.pick(req.body, 'username', 'password');
  var userInfo;

// AUTHENTICATED Users=====================================================
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

// Setting homepage to authenticated users only
router.get('/api/home', middleware.requireAuthentication, function(req, res){
    modelController.userModify(req.user.id, function(data){
        res.json(data)
    });
});

router.get('/api/searchusers', middleware.requireAuthentication, function(req, res){
    modelController.searchAllUsers(
      req.user.id,
      function(data){
        res.json(data)
    });
});

router.get('/api/completed', middleware.requireAuthentication, function(req, res){
    modelController.userCompleted(req.user.id, function(data){
        res.json(data)
    });
});

router.get('/api/userforall/:id', function(req, res){
    modelController.userForAll(
      req.params.id,
      function(data){
        res.json(data)
    });
});

router.get('/api/userall', middleware.requireAuthentication, function(req, res){
    modelController.userAll(
      req.user.id,
      req.user.profileImage,
      function(data){
        res.json(data)
    });
});

// Setting mission homepage
router.get('/api/missionhome', middleware.requireAuthentication, function(req,res){
    modelController.missionMain(req.user.id, 
      function(data){
      res.json(data)
    })
});

// Setting quest homepage
router.get('/api/questhome', middleware.requireAuthentication, function(req,res){
    modelController.questMain(req.user.id, function(data){
      res.json(data)
    })
});

// Retrieving all Bubo Missions and Quests
router.get('/api/search', middleware.requireAuthentication, function(req,res){
    modelController.allMain(function(data){
      res.json(data)
    })
});

// Sign-out: Deletes user's JSON Web Token once logged out
router.delete('/api/users/logout', middleware.requireAuthentication, function (req, res) {
  req.token.destroy().then(function () {
    res.status(204).send();
  }).catch(function () {
    res.status(500).send();
  });
});


// Allows users to create a Mission
router.post('/api/mission/create', middleware.requireAuthentication, function(req, res){
    modelController.missionCreate(
      req.body.title,
      req.body.description,
      req.body.selection,
      req.body.createdOn,
      req.user, 
    function(success){
      res.json(success);
    });
});

router.post('/api/imageupload', middleware.requireAuthentication, function(req, res){
    modelController.imageUpload(
      req.body.image,
      req.user.id, 
    function(success){
      res.json(success);
    });
});

// Allows users to add Tasks to a Mission
router.post('/api/missiontask/create/', middleware.requireAuthentication, function(req, res){
    models.User.findOne({where: {id: req.user.id}}).then(function(user){
        models.Mission.findOne({ where: {title: req.body.dropdownMission }}).then(function(mission){
          models.Missiontask.create({
            task: req.body.task,
            missionName: req.body.dropdownMission,
            isCompleted: false,
            active: false,
            UserId: req.user.id,
            MissionId: mission.id,
            dateTask: req.body.dateTask,
            timeTask: req.body.timeTask
          }).then(function(missiontask){
          mission.addMissiontask(missiontask).then(function(success){
           res.json(missiontask); 
        }).catch(function(err){
          throw err;
          });
        });
      });
    });
});

router.post('/api/milestone/create/', middleware.requireAuthentication, function(req, res){
    models.User.findOne({where: {id: req.user.id}}).then(function(user){
        models.Quest.findOne({ where: {title: req.body.dropdownQuest }}).then(function(quest){
          models.Milestone.create({
            milestone: req.body.milestone,
            questName: req.body.dropdownQuest,
            isCompleted: false,
            active: false,
            UserId: req.user.id
          }).then(function(milestone){
             quest.addMilestone(milestone).then(function(success){
           res.json(milestone); 
        }).catch(function(err){
          throw err;
          });
        });
      });
    });
});

router.post('/api/milestonetask/create/', middleware.requireAuthentication, function(req, res){
    models.User.findOne({where: {id: req.user.id}}).then(function(user){
      models.Quest.findOne({ where: {title: req.body.dropdownQuest}}).then(function(quest){
        models.Milestone.findOne({ where: {milestone: req.body.dropdownMilestone }}).then(function(milestone){
          models.Milestonetask.create({
            task: req.body.milestonetask,
            questName: req.body.dropdownQuest,
            milestoneName: req.body.dropdownMilestone,
            taskCompleted: false,
            active: false,
            UserId: req.user.id,
            MilestoneId: milestone.id,
            QuestId: quest.id
          }).then(function(milestonetask){
             milestone.addMilestonetask(milestonetask).then(function(success){
           res.json(milestonetask); 
        }).catch(function(err){
          throw err;
          });
        });
      });
    });
  });
});

// Allows users to add a Quest
router.post('/api/quest/create', middleware.requireAuthentication, function(req, res){
    modelController.questCreate(
      req.body.title,
      req.body.description,
      req.body.selection,
      req.body.dateQuest,
      req.body.createdOn,
      req.user, 
    function(success){
      res.json(success);
    });
});

router.put('/api/likemission/:id', function(req, res){
  modelController.likeIncrementMission(
    req.params.id,
    function(success){
      res.json(success)
    });
});

router.put('/api/likequest/:id', function(req, res){
  modelController.likeIncrementQuest(
    req.params.id,
    function(success){
      res.json(success)
    });
});

router.put('/api/missiontask/toggle/:id', middleware.requireAuthentication, function(req, res){
  modelController.missionTaskToggle(
    req.params.id,
    function(success){
      res.json(success)
    });
});

// Toggles a Task for completion
router.put('/api/missiontask/toggle/:id', middleware.requireAuthentication, function(req, res){
  modelController.missionTaskToggle(
    req.params.id,
    function(success){
      res.json(success)
    });
});

router.put('/api/milestonetask/toggle/:id', middleware.requireAuthentication, function(req, res){
  modelController.milestoneTaskToggle(
    req.params.id,
    function(success){
      res.json(success)
    });
});

router.put('/api/milestone/toggle/:id', middleware.requireAuthentication, function(req, res){
  modelController.milestoneToggle(
    req.params.id,
    function(success){
      res.json(success)
    });
});

router.put('/api/quest/complete/:id', middleware.requireAuthentication, function(req, res){
  modelController.questComplete(
    req.params.id,
    req.body.completedOn,
    function(success){
      res.json(success)
    });
});

router.put('/api/mission/complete/:id', middleware.requireAuthentication, function(req, res){
  modelController.missionComplete(
    req.params.id,
    req.body.completedOn,
    function(success){
      res.json(success)
    });
});

// Allows users to delete a Mission
router.delete('/api/mission/delete/:id', middleware.requireAuthentication, function(req, res){
    modelController.missionDelete(
        req.user.id,
        req.params.id,
    function(success){
      res.json(success);
    })
})

router.delete('/api/missiontask/delete/:id', middleware.requireAuthentication, function(req, res){
    modelController.missionTaskDelete(
        req.user.id,
        req.params.id,
    function(success){
      res.json(success);
    })
})

router.delete('/api/milestonetask/delete/:id', middleware.requireAuthentication, function(req, res){
    modelController.milestoneTaskDelete(
        req.user.id,
        req.params.id,
    function(success){
      res.json(success);
    })
})
// Allows users to delete a Quest
router.delete('/api/quest/delete/:id', middleware.requireAuthentication, function(req, res){
    modelController.questDelete(
        req.user.id,
        req.params.id,
    function(success){
      res.json(success);
    })
})

router.delete('/api/milestone/delete/:id', middleware.requireAuthentication, function(req, res){
    modelController.milestoneDelete(
        req.user.id,
        req.params.id,
    function(success){
      res.json(success);
    })
})

router.post('/api/users/comment', middleware.requireAuthentication, function(req,res){
    modelController.userComment(
      req.body.comment, 
      req.body.createdOn,
      req.user.id,
      req.body.MissionId,
      req.body.QuestId,
      req.user.name,
    function(success){
      res.json(success);
    });
});

router.get('/api/comments', middleware.requireAuthentication, function(req,res){
    modelController.allComments(function(data){
      res.json(data)
    })
});

router.get('*', (req,res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
})

module.exports = router;
