'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', {

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
        Mission.belongsTo(models.User);
        Mission.hasMany(models.Task);
      }
    }
  });
  return Mission;
};