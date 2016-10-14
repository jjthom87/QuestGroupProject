'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', {
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
        Mission.belongsTo(models.User);
        Mission.hasMany(models.Task);
      }
    }
  });
  return Mission;
};