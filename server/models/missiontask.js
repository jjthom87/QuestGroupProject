// TASK: Dictates data fields for 'Task' item
// Multiple 'Tasks' can exist under a single 'Mission' item
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Missiontask = sequelize.define('Missiontask', {
	  task: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    missionName: {
      type: DataTypes.STRING
    },
    isCompleted: {
      type: DataTypes.BOOLEAN
    },
    active: {
      type: DataTypes.BOOLEAN
    },
    dateTask: {
      type: DataTypes.TEXT
    },
    timeTask: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
       	Missiontask.belongsTo(models.Mission);
        Missiontask.hasMany(models.Image);
      }
    }
  });
  return Missiontask;
};