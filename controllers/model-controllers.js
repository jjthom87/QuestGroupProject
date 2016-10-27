// Model-Controller: Contains functions to add, delete, or update items in the database

var models = require('../models');
models.sequelize.sync();

var modelController = {
	// Returns all Missions, Quests, and Tasks in the database
	userModify: function(id, cb){
		models.User.findOne({ where: {id: id}}).then(function(user){
	        user.getMissions({ where: {missionCompleted: false}}).then(function(missions){
		        var enteredMissions = [];
		        missions.forEach(function(mission){
		            enteredMissions.push(mission);
		        });
		    user.getQuests({ where: {questCompleted: false}}).then(function(quests){
		          var enteredQuests = [];
		          quests.forEach(function(quest){
		            enteredQuests.push(quest);
		        });
		    user.getMissiontasks({order: 'createdAt ASC'}).then(function(missiontasks){
		          var enteredMissiontasks = [];
		          missiontasks.forEach(function(missiontask){
		            enteredMissiontasks.push(missiontask);
		        });
		    user.getMilestones({order: 'createdAt ASC'}).then(function(milestones){
		    	  var enteredMilestones = [];
		    	  milestones.forEach(function(milestone){
		    	  	enteredMilestones.push(milestone)
		    	  });
		   	user.getMilestonetasks({order: 'createdAt ASC'}).then(function(milestonetasks){
		   		var enteredMilestonetasks = [];
		   			milestonetasks.forEach(function(milestonetask){
		   				enteredMilestonetasks.push(milestonetask)
		   			});
		        var data = {
		          currentUser: user,
		          missions: enteredMissions,
		          quests: enteredQuests,
		          missiontasks: enteredMissiontasks,
		          milestones: enteredMilestones,
		          milestonetasks: enteredMilestonetasks
		        }
		        cb(data);
				}).catch(function(err){
					cb(err);
				});
			  });
			});
	  	  });
    	});
	  });
  	},
	userCompleted: function(id, cb){
		models.User.findOne({ where: {id: id}}).then(function(user){
	        user.getMissions({ where: {missionCompleted: true}}).then(function(missions){
		        var enteredMissions = [];
		        missions.forEach(function(mission){
		            enteredMissions.push(mission);
		        });
		    user.getQuests({ where: {questCompleted: true}}).then(function(quests){
		          var enteredQuests = [];
		          quests.forEach(function(quest){
		            enteredQuests.push(quest);
		        });
		    user.getMissiontasks().then(function(missiontasks){
		          var enteredMissiontasks = [];
		          missiontasks.forEach(function(missiontask){
		            enteredMissiontasks.push(missiontask);
		        });
		    user.getMilestones().then(function(milestones){
		    	  var enteredMilestones = [];
		    	  milestones.forEach(function(milestone){
		    	  	enteredMilestones.push(milestone)
		    	  });
		   	user.getMilestonetasks().then(function(milestonetasks){
		   		var enteredMilestonetasks = [];
		   			milestonetasks.forEach(function(milestonetask){
		   				enteredMilestonetasks.push(milestonetask)
		   			});
		        var data = {
		          currentUser: user,
		          missions: enteredMissions,
		          quests: enteredQuests,
		          missiontasks: enteredMissiontasks,
		          milestones: enteredMilestones,
		          milestonetasks: enteredMilestonetasks
		        }
		        cb(data);
				}).catch(function(err){
					cb(err);
				});
			  });
			});
	  	  });
    	});
	  });
  	},
	userForAll: function(id, cb){
		var allUsers;
		models.User.findAll({}).then(function(success){
	    	allUsers = success;
		models.User.findOne({ where: {id: id}}).then(function(user){
	        user.getMissions({ where: {public: 'Yes'}}).then(function(missions){
		        var enteredMissions = [];
		        missions.forEach(function(mission){
		            enteredMissions.push(mission);
		        });
		    user.getQuests({ where: {public: 'Yes'}}).then(function(quests){
		          var enteredQuests = [];
		          quests.forEach(function(quest){
		            enteredQuests.push(quest);
		        });
		    user.getMissiontasks({order: 'createdAt ASC'}).then(function(missiontasks){
		          var enteredMissiontasks = [];
		          missiontasks.forEach(function(missiontask){
		            enteredMissiontasks.push(missiontask);
		        });
		    user.getMilestones({order: 'createdAt ASC'}).then(function(milestones){
		    	  var enteredMilestones = [];
		    	  milestones.forEach(function(milestone){
		    	  	enteredMilestones.push(milestone)
		    	  });
		   	user.getMilestonetasks({order: 'createdAt ASC'}).then(function(milestonetasks){
		   		var enteredMilestonetasks = [];
		   			milestonetasks.forEach(function(milestonetask){
		   				enteredMilestonetasks.push(milestonetask)
		   			});
		        var data = {
		          currentUser: user,
		          missions: enteredMissions,
		          quests: enteredQuests,
		          missiontasks: enteredMissiontasks,
		          milestones: enteredMilestones,
		          milestonetasks: enteredMilestonetasks,
		          allUsers: allUsers
		        }
		        cb(data);
				}).catch(function(err){
					cb(err);
				});
			  });
			});
	  	  });
    	});
	  });
	 });
  	},
	userAll: function(id, profileImage, cb){
			var allUsers;
		models.User.findAll({}).then(function(success){
	    	allUsers = success;
		models.User.findOne({ where: {id: id}}).then(function(user){
	        user.getMissions({ include: [ models.Comment ]}).then(function(missions){
		        var enteredMissions = [];
		        missions.forEach(function(mission){
		            enteredMissions.push(mission);
		        });
		    user.getQuests({ include: [ models.Comment ]}).then(function(quests){
		          var enteredQuests = [];
		          quests.forEach(function(quest){
		            enteredQuests.push(quest);
		        });
		    user.getMissiontasks({order: 'createdAt ASC'}).then(function(missiontasks){
		          var enteredMissiontasks = [];
		          missiontasks.forEach(function(missiontask){
		            enteredMissiontasks.push(missiontask);
		        });
		    user.getMilestones({order: 'createdAt ASC'}).then(function(milestones){
		    	  var enteredMilestones = [];
		    	  milestones.forEach(function(milestone){
		    	  	enteredMilestones.push(milestone)
		    	  });
		   	user.getMilestonetasks({order: 'createdAt ASC'}).then(function(milestonetasks){
		   		var enteredMilestonetasks = [];
		   			milestonetasks.forEach(function(milestonetask){
		   				enteredMilestonetasks.push(milestonetask)
		   			});
		        var data = {
		          currentUser: user,
		          missions: enteredMissions,
		          quests: enteredQuests,
		          missiontasks: enteredMissiontasks,
		          milestones: enteredMilestones,
		          milestonetasks: enteredMilestonetasks,
		          profileImage: profileImage,
		          allUsers: allUsers
		        }
		        cb(data);
				}).catch(function(err){
					cb(err);
				});
			  });
			});
	  	  });
    	});
	  });
	 });
  	},
	feedPage: function(id, cb){
			var allUsers;
			var lastFiveUsers;
			var lastFiveComments;
			var lastFiveMissions;
			var lastFiveQuests;
		models.User.findAll().then(function(success){
	    	allUsers = success;
		models.User.findAll({ order: 'id DESC', limit: 5 }).then(function(success){
	    	lastFiveUsers = success;
		models.Comment.findAll({ order: 'id DESC', limit: 5 }).then(function(success){
	    	lastFiveComments = success;
		models.Mission.findAll({ order: 'id DESC', limit: 5 }).then(function(success){
	    	lastFiveMissions = success;
		models.Quest.findAll({ order: 'id DESC', limit: 5 }).then(function(success){
	    	lastFiveQuests = success;
		models.User.findOne({ where: {id: id}}).then(function(user){
	        user.getMissions({ order: 'id DESC', limit: 3, include: [ models.Comment, models.Missiontask ]}).then(function(missions){
		        var enteredMissions = [];
		        missions.forEach(function(mission){
		            enteredMissions.push(mission);
		        });
		    user.getQuests({ order: 'id DESC', limit: 3, include: [ models.Comment, models.Milestone, models.Milestonetask ]}).then(function(quests){
		          var enteredQuests = [];
		          quests.forEach(function(quest){
		            enteredQuests.push(quest);
		        });
		        var data = {
		          allUsers: allUsers,
		          currentUser: user,
		          lastFiveUsers: lastFiveUsers,
		          lastFiveComments: lastFiveComments,
		          lastFiveMissions: lastFiveMissions,
		          lastFiveQuests: lastFiveQuests,
		          userMissions: enteredMissions,
		          userQuests: enteredQuests
		        }
		        cb(data);
				}).catch(function(err){
					cb(err);
				});
			  });
		    });
		   });
		  });
	    });
	  });
     });
  	},
	searchAllUsers: function(id, cb){
		var currentUser;
		var allUsers;
		models.User.findOne({ where: {id: id}}).then(function(success){
			currentUser = success;
	    models.User.findAll({}).then(function(success){
	    	allUsers = success;
	    	var data = {
	    		currentUser: currentUser,
	    		allUsers: allUsers
	    	}
	    	cb(data);
	    }).catch(function(err){
	    	cb(err);
	    });
	  })
	},
  	// Creates a new User record to the database (See route 'users/create')
  	userCreate: function(name, username, password, createdOn, profileImage, cb){
	  	models.User.create({
	  	  name: name,
	      username: username,
	      password: password,
	      createdOn: createdOn,
	      profileImage: profileImage
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			 cb(err);
		});
	},
	likeIncrementMission: function(id, cb){
	  models.Mission.findOne({ where: { id: id}}).then(function(success){
	        success.increment('likes');
	        success.save();
	          cb(success);
	      }).catch(function(err){
	        throw err
	      })	
	},
	likeIncrementQuest: function(id, cb){
	  models.Quest.findOne({ where: { id: id}}).then(function(success){
	        success.increment('likes');
	        success.save();
	          cb(success);
	      }).catch(function(err){
	        throw err
	      })	
	},
	// Updates the 'isCompleted' property for the User's specific Task(s) in the database
	missionTaskToggle: function(uuid, cb){
	  models.Missiontask.findOne({ where: { uuid: uuid}}).then(function(success){
	        success.set('isCompleted', true);
	        success.save();
	          cb(success);
	      }).catch(function(err){
	        throw err
	      })	
	},
	milestoneToggle: function(uuid, cb){
	  models.Milestone.findOne({ where: { uuid: uuid}}).then(function(success){
	        success.set('isCompleted', true);
	        success.save();
	          cb(success);
	      }).catch(function(err){
	        throw err
	      })	
	},
	questComplete: function(id, completedOn, cb){
	  models.Quest.findOne({ where: { id: id}}).then(function(quest){
	        quest.set('questCompleted', true);
	       	quest.set('completedOn', completedOn);
	        quest.save().then(function(quest){
	        	quest.reload().then(function(success){
	        		cb(quest);
	        	})
	    	})
	      }).catch(function(err){
	        cb(err)
	      })	
	},
	missionComplete: function(id, completedOn, cb){
	  models.Mission.findOne({ where: { id: id}}).then(function(success){
	        success.set('missionCompleted', true);
	        success.set('completedOn', completedOn);
	        success.save();
	          cb(success);
	      }).catch(function(err){
	         cb(err)
	      })	
	},
	milestoneTaskToggle: function(uuid, cb){
	  models.Milestonetask.findOne({ where: { uuid: uuid}}).then(function(success){
	        success.set('isCompleted', true);
	        success.save();
	          cb(success);
	      }).catch(function(err){
	        throw err
	      })	
	},
	// Retrieves all Missions for matching User (See route '/missionhome')
	missionMain: function(id, cb){
		var missions;
		var missiontasks;
	    models.Mission.findAll({ where: {UserId: id, missionCompleted: false}}).then(function(success){
	        missions = success;
	   	models.Missiontask.findAll({ where: {UserId: id}}).then(function(success){
	   		missiontasks = success;
	   		var data = {
	   			missions: missions,
	   			missiontasks: missiontasks
	   		}
	   		cb(data);
	    }).catch(function(err){
	    	cb(err);
	    });
	  });
	},
	// Retrieves all Quests for matching User (See route '/questhome')
	questMain: function(id, cb){
		var quests;
		var milestones;
		var milestonetasks;
	    models.Quest.findAll({ where: {UserId: id, questCompleted: false}}).then(function(success){
	        quests = success;
	    models.Milestone.findAll({ where: {UserId: id}}).then(function(success){
	    	milestones=success
		models.Milestonetask.findAll({ where: {UserId: id}}).then(function(success){
			milestonetasks = success
	    	var data = {
	    		quests: quests,
	    		milestones: milestones,
				milestonetasks: milestonetasks
	    	}
	    	cb(data);
	    }).catch(function(err){
	    	cb(err);
	    });
	  });
	 });
	},

 //  	allMainDONTUSE: function(searchInput, cb){
 //        models.Mission.findAll({ where: {title: searchInput, public: 'Yes' }}).then(function(missions){
 //        var missionsArray = [];
 //            missions.forEach(function(mission){
 //                missionsArray.push(mission);
 //            });
 //        models.Quest.findAll({ where: {quest: searchInput, public: 'Yes'}}).then(function(quests){
 //        var questsArray = [];
 //            quests.forEach(function(quest){
 //                questsArray.push(quest);
 //            });
	// 	models.Milestone.findAll({ where: {milestone: searchInput}}).then(function(milestones){
 //        var milestonesArray = [];
 //            milestones.forEach(function(milestone){
 //                milestonesArray.push(milestone);
 //            });
	// 	models.Missiontask.findAll({ where: {task: searchInput}}).then(function(missiontasks){
 //        var missiontaskArray = [];
 //            missiontasks.forEach(function(missiontask){
 //            	missiontaskArray.push(missiontask);
 //            });
 //        models.Milestonetask.findAll({ where: {task: searchInput}}).then(function(milestonetasks){
 //        var milestonetaskAll = [];
 //            milestonetasks.forEach(function(milestonetask){
 //            	milestonetaskAll.push(milestonetask);
 //            });

 //         var data = {
 //                missions: missionsArray,
 //                quests: questsArray,
 //                missiontasks: missiontaskArray,
 //                milestones: milestonesArray,
 //                milestonetasks: milestonetaskAll
 //            }
 //            cb(data);
 //        }).catch(function(err){
 //            throw err;
 //      	});
 //       });
 //     });
	// });
 //   });
 //  },

// Retreives all Public Bubo Missions and Quests that exist in database (See route '/searchall')
	allMain: function(cb){
        models.Mission.findAll({ where: {public: 'Yes'}}).then(function(missions){
        var missionsArray = [];
            missions.forEach(function(mission){
                missionsArray.push(mission);
            });
        models.Quest.findAll({ where: {public: 'Yes'}}).then(function(quests){
        var questsArray = [];
            quests.forEach(function(quest){
                questsArray.push(quest);
            });
		models.Milestone.findAll({order: 'createdAt ASC'}).then(function(milestones){
        var milestonesArray = [];
            milestones.forEach(function(milestone){
                milestonesArray.push(milestone);
            });
		models.Missiontask.findAll({order: 'createdAt ASC'}).then(function(missiontasks){
        var missiontaskArray = [];
            missiontasks.forEach(function(missiontask){
            	missiontaskArray.push(missiontask);
            });
        models.Milestonetask.findAll({order: 'createdAt ASC'}).then(function(milestonetasks){
        var milestonetaskAll = [];
            milestonetasks.forEach(function(milestonetask){
            	milestonetaskAll.push(milestonetask);
            });
        models.User.findAll().then(function(users){
        var usersArray = [];
        	users.forEach(function(user){
        		usersArray.push(user);
        	});
        
         var data = {
                missions: missionsArray,
                quests: questsArray,
                missiontasks: missiontaskArray,
                milestones: milestonesArray,
                milestonetasks: milestonetaskAll,
                users: usersArray
            }
            cb(data);
        }).catch(function(err){
            throw err;
      	});
       });
     });
	});
   });
  });
  },

	// Creates a new Mission record to the database (See route 'mission/create')
	missionCreate: function(title, description, public, createdOn, user, cb){
		models.Mission.create({
		  title: title,
		  description: description,
		  isCompleted: false,
		  missionCompleted: false,
		  public: public,
		  createdOn: createdOn,
		  likes: 0
		  	  }).then(function(mission){
			      user.addMission(mission).then(function(success){
			    	cb(mission);
				  }).catch(function(err){
				    cb(err);
			})
		})
	},
	// Creates a new Quest record to the database (See route '/quest/create')
	questCreate: function(title, description, public, dateQuest, createdOn, user, cb){
		models.Quest.create({
		  title: title,	
		  description: description,
		  isCompleted: false,
		  questCompleted: false,
		  public: public,
		  dateQuest: dateQuest,
		  createdOn: createdOn,
		  likes: 0
			  }).then(function(quest){
			    user.addQuest(quest).then(function(success){
				    cb(quest);
			  	}).catch(function(err){
			    	cb(err);
			  	})
		})
	},
	// missiontaskCreate: function(id, dropdownMission, task, dropdown, UserId, MissionId, dateTask, timeTask, mission, cb){
	//     models.User.findOne({where: {id: id}}).then(function(user){
	//         models.Mission.findOne({ where: {title: dropdownMission }}).then(function(mission){
	//           models.Missiontask.create({
	//             task: task,
	//             missionName: dropdown,
	//             isCompleted: false,
	//             active: false,
	//             UserId: UserId,
	//             MissionId: MissionId,
	//             dateTask: dateTask,
	//             timeTask: timeTask
	//           }).then(function(missiontask){
	//           mission.addMissiontask(missiontask).then(function(success){
	//            cb(missiontask); 
	//         }).catch(function(err){
	//           throw err;
	//           });
	//         });
	//       });
	//     });
	// },
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
	},
	missionTaskDelete: function(userId, paramsId, cb){
		models.User.findOne({where: {id: userId}}).then(function(){
		    models.Missiontask.destroy({ where: { uuid: paramsId }
		    }).then(function(success){
		      cb(success);
		    }).catch(function(err){
		      throw err;
		    })
	 	})
	},
	milestoneTaskDelete: function(userId, paramsId, cb){
		models.User.findOne({where: {id: userId}}).then(function(){
		    models.Milestonetask.destroy({ where: { uuid: paramsId }
		    }).then(function(success){
		      cb(success);
		    }).catch(function(err){
		      throw err;
		    })
	 	})
	},
	milestoneDelete: function(userId, paramsId, cb){
		models.User.findOne({where: {id: userId}}).then(function(){
		    models.Milestone.destroy({ where: { uuid: paramsId }
		    }).then(function(success){
		      cb(success);
		    }).catch(function(err){
		      throw err;
		    })
	 	})
	},
  	userComment: function(comment, createdOn, UserId, MissionId, QuestId, name, commentee, missionName, questName, cb){
	  	models.Comment.create({
	  	  comment: comment,
	      createdOn: createdOn,
	      UserId: UserId,
	      MissionId: MissionId,
	      QuestId: QuestId,
	      usersName: name,
	      commentee: commentee,
	      missionName: missionName,
	      questName: questName
	    }).then(function(success) {
	      	cb(success);
		}).catch(function(err){
			cb(err);
		});
	},
	allComments: function(cb){
	    models.Comment.findAll({}).then(function(success){
	   		cb(success);
	    }).catch(function(err){
	    	throw err;
	    });
	}
}

module.exports = modelController;


