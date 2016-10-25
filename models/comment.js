'use strict';
module.exports = function(sequelize, DataTypes) {
  var Comment = sequelize.define('Comment', {
    comment: {
      type: DataTypes.TEXT
    },
    createdOn: {
    	type: DataTypes.STRING
    },
    usersName: {
      type: DataTypes.STRING
    },
    commentee: {
      type: DataTypes.STRING
    },
    missionName: {
      type: DataTypes.STRING
    },
    questName: {
      type: DataTypes.STRING
    },
    commenterImage: {
      type: DataTypes.TEXT('long')
    }
  }, {
    classMethods: {
      associate: function(models) {
        Comment.belongsTo(models.User);
        Comment.belongsTo(models.Mission);
        Comment.belongsTo(models.Quest);
      }
    }
  });
  return Comment;
};