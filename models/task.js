'use strict';
module.exports = function(sequelize, DataTypes) {
  var Task = sequelize.define('Task', {

		task: {
			type: DataTypes.STRING,
			allowNull: false
		},
      description: {
        type: DataTypes.TEXT,
    allowNull: false,
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
        // associations can be defined here
        Task.belongsTo(models.User);
        Task.belongsTo(models.Quest);
        Task.belongsTo(models.Mission);
      }
    }
  });
  return Task;
};