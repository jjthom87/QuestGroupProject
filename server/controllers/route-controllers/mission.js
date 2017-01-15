var express = require('express');
var path = require('path');
var _ = require('lodash');

var router = express.Router();

var Mission = require('./model-controllers/mission.js').Mission;

var middleware = require('./../middleware/middleware.js')();

module.exports.controller = function(app){
	app.delete('/api/mission/delete/:id', middleware.requireAuthentication, function(req, res){
	    Mission.delete(
	        req.user.id,
	        req.params.id,
	    function(success){
	      res.json(success);
	    });
	});
}