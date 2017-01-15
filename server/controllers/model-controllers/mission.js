var db = require('./db.js');

module.exports.Mission = {
	delete: function(userId, paramsId, cb){
		db.delete('Mission', userId, paramsId, function(data){
			cb(data);
		})
	}
}