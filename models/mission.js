'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', {
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    task1: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task2: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task3: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task4: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task5: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    task6: {
      type: DataTypes.TEXT
    },
    task7: {
      type: DataTypes.TEXT
    },
    task8: {
      type: DataTypes.TEXT
    },
    task9: {
      type: DataTypes.TEXT
    },
    task10: {
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
        Mission.belongsTo(models.User);
      }
    }
  });
  return Mission;
};