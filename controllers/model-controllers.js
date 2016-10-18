// Model-Controller: Contains functions to add, delete, or update items in the database

var models = require('../models');
models.sequelize.sync();

var modelController = {
	// Returns all Missions, Quests, and Tasks in the database
	userHome: function(id, cb){
		models.User.findOne({ where: {id: id}}).then(function(user){
	        user.getMissions().then(function(missions){
		        var enteredMissions = [];
		        missions.forEach(function(mission){
		            enteredMissions.push(mission);
		        });
		    user.getQuests().then(function(quests){
		          var enteredQuests = [];
		          quests.forEach(function(quest){
		            enteredQuests.push(quest);
		        });
		    user.getTasks().then(function(tasks){
		          var enteredTasks = [];
		          tasks.forEach(function(task){
		            enteredTasks.push(task);
		        });
		        var data = {
		          currentUser: user,
		          missions: enteredMissions,
		          quests: enteredQuests,
		          tasks: enteredTasks
		        }
		        cb(data);
				}).catch(function(err){
					throw err;
				});
			  });
	  		});
    	});
  	},
  	// Creates a new User record to the database (See route 'users/create')
  	userCreate: function(name, username, password, cb){
	  	models.User.create({
	  	  name: name,
	      username: username,
	      password: password
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			throw err;
		});
	},
	// Updates the 'isCompleted' property for the User's specific Task(s) in the database
	taskToggle: function(uuid, cb){
	  models.Task.findOne({ where: { uuid: uuid}}).then(function(success){
	        success.set('isCompleted', true);
	        success.save();
	          cb(success);
	      }).catch(function(err){
	        throw err
	      })	
	},
	// Retrieves all Missions for matching User (See route '/missionhome')
	missionMain: function(id, cb){
	    models.Mission.findAll({ where: {UserId: id}}).then(function(success){
	        cb(success);
	    }).catch(function(err){
	    	throw err;
	    });
	},
	// Creates a new Mission record to the database (See route 'mission/create')
	missionCreate: function(title, description, user, cb){
		models.Mission.create({
		  title: title,
		  description: description,
		  isCompleted: false,
		  active: false
		  	  }).then(function(mission){
			      user.addMission(mission).then(function(success){
			    	cb(mission);
				  }).catch(function(err){
				    throw err;
			})
		})
	},
	// Creates a new Quest record to the database (See route '/quest/create')
	questCreate: function(title, description, user, cb){
		models.Quest.create({
		  title: title,	
		  description: description,
		  isCompleted: false,
		  active: false
			  }).then(function(quest){
			    user.addQuest(quest).then(function(success){
				    cb(quest);
			  	}).catch(function(err){
			    	throw err;
			  	})
		})
	},
	// Removes an existing Mission from the database (See route '/mission/delete/:id')
	missionDelete: function(userId, paramsId, cb){
		models.User.findOne({where: {id: userId}}).then(function(){
		    models.Mission.destroy({ where: { id: paramsId }
		    }).then(function(success){
		      cb(success);
		    }).catch(function(err){
		      throw err;
		    })
	 	})
	},
	// Removes an existing Quest from the database (See route '/quest/delete/:id')
	questDelete: function(userId, paramsId, cb){
		models.User.findOne({where: {id: userId}}).then(function(){
		    models.Quest.destroy({ where: { id: paramsId }
		    }).then(function(success){
		      cb(success);
		    }).catch(function(err){
		      throw err;
		    })
	 	})
	}
}

module.exports = modelController;


