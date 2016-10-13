var cryptojs = require('crypto-js');
var models = require('./models');

module.exports = function (db) {

	return {
		requireAuthentication: function (req, res, next) {
			var token = req.get('Auth') || '';

			models.Token.findOne({
				where: {
					tokenHash: cryptojs.MD5(token).toString()
				}
			}).then(function (tokenInstance) {
				if (!tokenInstance) {
					throw new Error();
				}

				req.token = tokenInstance;
				return models.User.findByToken(token);
			}).then(function (user) {
				req.user = user;
				next();
			}).catch(function () {
				res.status(401).send();
			});
		}
	};

};