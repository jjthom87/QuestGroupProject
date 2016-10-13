'use strict';
module.exports = function(sequelize, DataTypes) {
  var Milestone = sequelize.define('Milestone', {

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
        Milestone.belongsTo(models.User);
        Milestone.hasMany(models.Quest);
        Milestone.hasMany(models.Mission);
        Milestone.hasMany(models.Task);
      }
    }
  });
  return Milestone;
};