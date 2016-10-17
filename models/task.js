'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
	description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    isCompleted: {
      type: DataTypes.BOOLEAN
    },
    active: {
      type: DataTypes.BOOLEAN
    }
  }, {
    classMethods: {
      associate: function(models) {
       	Task.belongsTo(models.Mission);
      }
    }
  });
  return Task;
};