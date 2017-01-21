var db = require('./../db.js');

module.exports.Mission = {
	delete: function(id, cb){
		db.delete('Missions', id, function(data){
			cb(data);
		})
	}
}