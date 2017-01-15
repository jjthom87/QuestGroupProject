// MILESTONE: Dicates data fields for 'Milestone' item
// Multiple 'Milestones' can exist under a single 'Quest' item
'use strict';
module.exports = function(sequelize, DataTypes) {
  var Milestone = sequelize.define('Milestone', {
    milestone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    uuid: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true
    },
    questName: {
      type: DataTypes.STRING
    },
    taskName: {
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
        Milestone.belongsTo(models.Quest);
        Milestone.hasMany(models.Milestonetask);
        Milestone.hasMany(models.Image);
      }
    }
  });
  return Milestone;
};