'use strict';
module.exports = function(sequelize, DataTypes) {
  var Mission = sequelize.define('Mission', {
    title: DataTypes.STRING,
    text: DataTypes.STRING,
    date: DataTypes.DATE,
    url: DataTypes.STRING,
    timer: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Mission;
};