// QUEST: Dictates data fields for 'Quest' table
// A 'Quest' can contain multiple 'Milestones' items
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Quest = sequelize.define('Quest', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    questName: {
      type: DataTypes.STRING
    },
    dateQuest: {
      type: DataTypes.STRING
    },
    isCompleted: {
      type: DataTypes.BOOLEAN
    },
    likes: {
      type: DataTypes.INTEGER
    },
    public: {
      type: DataTypes.STRING
    },
    questCompleted: {
      type: DataTypes.BOOLEAN
    }
  }, {
    classMethods: {
      associate: function(models) {
        Quest.belongsTo(models.User);
        Quest.hasMany(models.Milestone);
        Quest.hasMany(models.Milestonetask);
      }
    }
  });
  return Quest;
};