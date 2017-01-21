var db = require('./../db.js');

module.exports.User = {
	findByUserId: function(id, cb){
		db.findByUserId('Users', id, function(data){
			cb(data);
		})
	}
}