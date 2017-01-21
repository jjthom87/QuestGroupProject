var cookieParser = require('cookie-parser');

var Mission = require('./../model-controllers/mission.js').Mission;
var User = require('./../model-controllers/user.js').User;

var middleware = require('./../../middleware/middleware.js')();

module.exports.controller = function(app){
	app.use(cookieParser());

	app.delete('/api/mission/delete/:id', middleware.requireAuthentication, function(req, res){
		User.findByUserId(req.user.id, function(){
		    Mission.delete(req.params.id, function(mission){
		      	res.json(mission);
		    });
		})
	});
}