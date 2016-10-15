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
				})
	  		})
    	})
  	}
}

module.exports = modelController;


