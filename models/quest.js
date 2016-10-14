'use strict';
module.exports = function(sequelize, DataTypes) {
  var Quest = sequelize.define('Quest', {
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
        Quest.belongsTo(models.User);
        Quest.hasMany(models.Milestone);
      }
    }
  });
  return Quest;
};