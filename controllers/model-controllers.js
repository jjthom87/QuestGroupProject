var models = require('../models');
models.sequelize.sync();

var modelController = {
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
		        var data = {
		          currentUser: user,
		          missions: enteredMissions,
		          quests: enteredQuests
		        }
		        cb(data);
				}).catch(function(err){
					throw err;
				})
	  		})
    	})
  	},
  	userCreate: function(firstname, lastname, username, password, cb){
	  	models.User.create({
	      firstname: firstname,
	      lastname: lastname,
	      username: username,
	      password: password
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			throw err;
		});
	},
	missionCreate: function(description, user, cb){
		models.Mission.create({
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
	questCreate: function(description, user, cb){
		models.Quest.create({
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


