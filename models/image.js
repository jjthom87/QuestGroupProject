'use strict';
module.exports = function(sequelize, DataTypes) {
  var Image = sequelize.define('Image', {
    image: {
      type: DataTypes.TEXT
    }
  }, {
    classMethods: {
      associate: function(models) {
        Image.belongsTo(models.User);
        Image.belongsTo(models.Mission);
        Image.belongsTo(models.Quest);
        Image.belongsTo(models.Missiontask);
        Image.belongsTo(models.Milestone);
        Image.belongsTo(models.Milestonetask)
      }
    }
  });
  return Image;
};