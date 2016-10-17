'use strict';
module.exports = function(sequelize, DataTypes) {
  var Milestone = sequelize.define('Milestone', {
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
        Milestone.belongsTo(models.Quest);
      }
    }
  });
  return Milestone;
};