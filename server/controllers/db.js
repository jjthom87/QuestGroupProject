var models = require('../models');
models.sequelize.sync();

module.exports = {
	delete: function(table, userId, paramsId){
		models.User.findOne({where: {id: userId}}).then(function(){
		    models.table.destroy({ where: { id: paramsId }
		    }).then(function(success){
		      cb(success);
		    }).catch(function(err){
		      throw err;
		    })
	 	})
	}
}