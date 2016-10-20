'use strict';
module.exports = function(sequelize, DataTypes) {
  var Milestonetask = sequelize.define('Milestonetask', {
	  task: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    milestoneName: {
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
        Milestonetask.belongsTo(models.Milestone);
      }
    }
  });
  return Milestonetask;
};