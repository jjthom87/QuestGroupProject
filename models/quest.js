'use strict';
module.exports = function(sequelize, DataTypes) {
  var Quest = sequelize.define('Quest', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    milestone: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    milestone2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    milestone3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    milestone4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
   milestone5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
   milestone6: {
      type: DataTypes.TEXT
    },
    milestone7: {
      type: DataTypes.TEXT
    },
    milestone8: {
      type: DataTypes.TEXT
    },
    milestone9: {
      type: DataTypes.TEXT
    },
    milestone10: {
      type: DataTypes.TEXT
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
      }
    }
  });
  return Quest;
};