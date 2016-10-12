'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', {

		task: {
			type: DataTypes.STRING,
			allowNull: false
		},
    isCompleted: {
      type: DataTypes.BOOLEAN
    }
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mission;
};