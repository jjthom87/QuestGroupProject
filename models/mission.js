// MISSION: Dictates data fields for Mission' item
// 'Missions' can contain multiple 'Task' items
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    missionName: {
      type: DataTypes.STRING
    },
    dateMission: {
      type: DataTypes.STRING
    },
    isCompleted: {
      type: DataTypes.BOOLEAN
    },
    public: {
      type: DataTypes.STRING
    },
    missionCompleted: {
      type: DataTypes.BOOLEAN
    },
    createdOn: {
      type: DataTypes.STRING
    },
    completedOn: {
      type: DataTypes.STRING
    },
    likes: {
      type: DataTypes.INTEGER
    }
  }, {
    classMethods: {
      associate: function(models) {
        Mission.belongsTo(models.User);
        Mission.hasMany(models.Missiontask);
        Mission.hasMany(models.Comment);
        Mission.hasMany(models.Image);
      }
    }
  });
  return Mission;
};