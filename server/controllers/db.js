var Sequelize = require('sequelize');
var sequelize = new Sequelize('quest47_db', 'root', '');

module.exports = {
	findByUserId: function(table, id, cb){
		sequelize.query('SELECT * FROM ' + table + ' WHERE id = ' + id, { type: Sequelize.QueryTypes.SELECT})
		.then(function(err,res){
			cb(res);
		}).catch(function(err){
			throw err
		})
	},
	delete: function(table, id, cb){
		sequelize.query('DELETE FROM ' + table + ' WHERE id = ' + id, { type: Sequelize.QueryTypes.DELETE})
		.then(function(err,res){
			cb(res);
		}).catch(function(err){
			throw err
		})
	}
}