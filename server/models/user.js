// USER: Dictates the data fields when storing User records
// Contains User's hashed password to be referenced with token after authentication
var bcrypt = require('bcryptjs');
var _ = require('underscore');
var jwt = require('jsonwebtoken');
var cryptojs = require('crypto-js');

module.exports = function (sequelize, DataTypes) {
	var User = sequelize.define('User', {
		name: {
			type: DataTypes.STRING,
			allowNull: false
		},
		username: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true
		},
		profileImage: {
			type: DataTypes.TEXT('long')
		},
		salt: {
			type: DataTypes.STRING
		},
		password_hash: {
			type: DataTypes.STRING
		},
		createdOn: {
			type: DataTypes.STRING
		},
		password: {
			type: DataTypes.VIRTUAL,
			allowNull: false,
			validate: {
				len: [7, 100]
			},
			set: function (value) { 
				var salt = bcrypt.genSaltSync(10);
				var hashedPassword = bcrypt.hashSync(value, salt);

				this.setDataValue('password', value);
				this.setDataValue('salt', salt);
				this.setDataValue('password_hash', hashedPassword);
			}
		}
	}, {
		classMethods: {
      		associate: function(models) {
       		 // associations can be defined here
       		 User.hasMany(models.Quest);
       		 User.hasMany(models.Mission);
       		 User.hasMany(models.Milestonetask);
       		 User.hasMany(models.Missiontask);       		 
       		 User.hasMany(models.Milestone);
       		 User.hasMany(models.Comment);
       		 User.hasMany(models.Image);
      		},
			authenticate: function(body) {
				return new Promise(function(resolve, reject) {
					if (typeof body.username !== 'string' || typeof body.password !== 'string') {
						return reject();
					}

					User.findOne({
						where: {
							username: body.username
						}
					}).then(function(user) {
						if (!user || !bcrypt.compareSync(body.password, user.get('password_hash'))) {
							return reject();
						}

						resolve(user);
					}, function(e) {
						reject();
					});
				});
			},
			findByToken: function(token) {
				return new Promise(function(resolve, reject) {
					try {
						var decodedJWT = jwt.verify(token, 'qwerty098');
						var bytes = cryptojs.AES.decrypt(decodedJWT.token, 'abc123!@#!');
						var tokenData = JSON.parse(bytes.toString(cryptojs.enc.Utf8));

						User.findById(tokenData.id).then(function (user) {
							if (user) {
								resolve(user);
							} else {
								reject();
							}
						}, function (e) {
							reject();
						});
					} catch (e) {
						reject();
					}
				});
			}
		},
		instanceMethods: {
			toPublicJSON: function() {
				var json = this.toJSON();
				return _.pick(json, 'id', 'name', 'username', 'createdAt', 'updatedAt');
			},
			generateToken: function(type) {
				if (!_.isString(type)) {
					return undefined;
				}

				try {
					var stringData = JSON.stringify({
						id: this.get('id'),
						type: type
					});
					var encryptedData = cryptojs.AES.encrypt(stringData, 'abc123!@#!').toString();
					var token = jwt.sign({
						token: encryptedData
					}, 'qwerty098');

					return token;
				} catch (e) {
					console.error(e);
					return undefined;
				}
			}
		}
	});
	return User;
};