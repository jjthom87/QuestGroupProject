'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
		task: {
			type: DataTypes.STRING,
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