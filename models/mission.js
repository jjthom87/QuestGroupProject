'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      uniquie: true
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    missionName: {
      type: DataTypes.STRING
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
        Mission.belongsTo(models.User);
        Mission.hasMany(models.Task);
      }
    }
  });
  return Mission;
};