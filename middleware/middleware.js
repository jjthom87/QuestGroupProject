// Middleware: Setting up user authentication

var cryptojs = require('crypto-js');
var models = require('../models');

module.exports = function () {

	return {
		requireAuthentication: function (req, res, next) {
			var token = req.get('Auth') || '';
			// Searches for token in the 'token' model
			models.Token.findOne({
				where: {
					tokenHash: cryptojs.MD5(token).toString()
				}
			}).then(function (tokenInstance) {
			// If no token is found, throw error (401)
				if (!tokenInstance) {
					throw new Error();
				}

				req.token = tokenInstance;
				return models.User.findByToken(token);
			}).then(function (user) {
			// Find User based on matching JSON Web Token
				req.user = user;
				next();
			}).catch(function () {
				res.status(401).send();
			});
		}
	};

};