var Class = require('../models/classSchema');

module.exports = {
	
	create: function(req, res) {
		Class.create(req.body, function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
	
	read: function(req, res) {
		Class.find({}).sort('users').limit(1)
		.exec(function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
	
	show: function(req, res) {
		Class.findById(req.params.id, function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	},
	
	update: function(req, res) {
		Class.findByIdAndUpdate(req.params.id, req.body, { new: true }, function(err, result) {
			if (err) return res.status(500).send(err);
			res.json(result);		
		});
	},
	
	destroy: function(req, res) {
		Class.findByIdAndRemove(req.params.id, function(req, result) {
			if (err) return res.status(500).send(err);
			res.json(result);
		});
	}
}